import React, {useState, useEffect} from 'react';
import uuid from 'uuid';
import Select from 'react-select';
import FilterEntry from './FilterEntry';
import { UilCheck } from '@iconscout/react-unicons';
import './FilterBox.css';

const getQuestionsAsOptions = (questions) => {
  return questions
    .filter((q) => q)
    .map((q) => {
      if (q.id < 0) {
        return {
          label: q.title.split('/')[2],
          value: q.id.toString(),
        };
      }
      return {
        label: q.title,
        value: q.value,
      };
    });
};

function FilterBox(props) {
  const {close, questions, textAnalytics, filters, dispatch, qTypes} = props;
  const [questionsList, setQuestionList] = useState([]);
  const [optionsList, setOptionsList] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newFilterLabel, setNewFilterLabel] = useState('');
  const [newQuestion, setNewQuestion] = useState(null);
  const [newOptions, setNewOptions] = useState([]);
  const [currentFilterId, setCurrentFilterId] = useState(null);

  const filterableQTypes = [
    qTypes.SINGLE_CHOICE,
    qTypes.MULTIPLE_CHOICE,
    qTypes.RANK_ORDER,
    qTypes.POPUP_CARD,
    qTypes.VECTOR_MAP,
    qTypes.AD_BUILDER,
    qTypes.SCALE,
    qTypes.ICONS,
    qTypes.LANGUAGE,
    qTypes.HOTSPOT,
    qTypes.TREEMAN,
    qTypes.VIRTUAL,
    qTypes.GROUP,
    qTypes.OPEN,
  ];


  useEffect(() => {
    if (questions) {
      const options = [];

      const filteredQuestions = questions.filter((q) =>
        filterableQTypes.includes(q.type)
      );

      const list = filteredQuestions
        .map((q) => {
          if (q.type === qTypes.OPEN) {
            if (!textAnalytics[q.id] || !textAnalytics[q.id].tags) {
              return null;
            }
          }

          const questionFilterLabel =
            q.type === qTypes.LANGUAGE ? 'Language' : q.title;

          return {
            value: q.id,
            label: questionFilterLabel,
            type: q.type,
          };
        })
        .filter((q) => q);

      filteredQuestions.forEach((q) => {
        if (q.type === qTypes.HOTSPOT) {
          const questionOptions = q.options.flatMap((option) =>
            q.buttons.map((button) => ({
              value: `${option.value}-${button.value}`,
              label: `${option.label} – ${button.label}`,
            }))
          );
          options.push(questionOptions);
        } else if (q.type === qTypes.GROUP) {
          const childrenQuestions = q.children.map((childrenQuestionId) =>
            questions.find((q) => q.id === childrenQuestionId)
          );

          const groupQuestionOptions = getQuestionsAsOptions(
            childrenQuestions
          ).map((option) => {
            // eslint-disable-next-line
            const question = questions.find((q) => q.id == option.value);

            if (question && question.children.length > 0) {
              option.disabled = true;
            }

            return option;
          });

          options.push(groupQuestionOptions);
        } else if (q.type === qTypes.OPEN) {
          if (textAnalytics[q.id] && textAnalytics[q.id].tags) {
            const oeTagOptions = textAnalytics[q.id].tags.map((tag) => {
              return {value: tag.id, label: tag.label};
            });

            options.push(oeTagOptions);
          }
        } else {
          const questionOptions = q.options.map((option) => ({
            value: option.value,
            label: option.label,
          }));
          options.push(questionOptions);
        }
      });

      setQuestionList(list);
      setOptionsList(options);
    }
  }, [questions]);

  useEffect(() => {
    // When a question has been just selected, select all options by default
    if (newQuestion && newOptions.length === 0) {
      // eslint-disable-next-line
      selectAllOptions();
    }
  }, [newQuestion]);

  const selectStyles = {
    control: (base, state) =>
      Object.assign(base, {
        border: 'none',
        boxShadow: 'none',
        cursor: 'pointer',
        background: '#f0f0f0',
      }),
  };

  const handleNewFilterSubmit = () => {
    setIsAdding(false);

    const validatedFilterLabel = () => {
      if (newFilterLabel.trim() === '') {
        return `${newQuestion.label} Filter`;
      }

      return newFilterLabel;
    };

    dispatch({
      type: 'addFilter',
      id: uuid(),
      selectedQuestion: newQuestion,
      selectedOptions: newOptions,
      label: validatedFilterLabel(),
    });
  };
  const handleEditFilterSubmit = () => {
    const filterIndex = filters.findIndex(
      (filter) => filter.id === currentFilterId
    );

    if (filterIndex > -1) {
      dispatch({
        type: 'updateFilter',
        index: filterIndex,
        selectedQuestion: newQuestion,
        selectedOptions: newOptions,
        label: newFilterLabel,
      });
    }

    setIsEditing(false);
  };
  const numActiveFilters = () => {
    return filters.filter((filter) => filter.on === true).length;
  };
  const handleDisableAll = () => {
    dispatch({type: 'disableAll'});
  };
  const handleEnableAll = () => {
    dispatch({type: 'enableAll'});
  };
  const handleOnSwitch = (index) => {
    dispatch({
      type: 'switch',
      index,
    });
  };
  const handleDeleteEntry = (index) => {
    dispatch({
      type: 'remove',
      index,
    });
  };

  const submitFilter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAdding) {
      handleNewFilterSubmit();
    } else {
      handleEditFilterSubmit();
    }
  };

  const handleOnEdit = async (filter, index) => {
    setNewFilterLabel(filter.label);
    setNewQuestion(filter.question);
    setNewOptions(filter.options);
    setCurrentFilterId(filter.id);
    setIsEditing(true);
  };

  const selectAllOptions = () => {
    const questionIndex = questionsList.findIndex(
      (question) => question.value === newQuestion.value
    );
    setNewOptions(optionsList[questionIndex]);
  };

  const deselectAllOptions = () => {
    setNewOptions([]);
  };

  return (
    <React.Fragment>
      <div className="filters--filter-box--header">
        <p className="filters--filter-box--title">
          <i className="nx nx-icon nx-filter" />
          Filters
        </p>
        <i className="nx nx-close" onClick={close} />
      </div>
      {!isAdding && !isEditing ? (
        <React.Fragment>
          <div className="filters--filter-box--info">
            <span>
              Active Filters{' '}
              {numActiveFilters() > 0 ? `(${numActiveFilters()})` : null}
            </span>
            {numActiveFilters() > 0 ? (
              <span
                className="filters--filter-box--info--disable"
                onClick={handleDisableAll}
              >
                Disable All
              </span>
            ) : (
              <span
                className="filters--filter-box--info--disable"
                onClick={handleEnableAll}
              >
                Enable All
              </span>
            )}
          </div>
          <div className="filters--filter-box--filter">
            {filters.map((filter, index) => (
              <FilterEntry
                key={`${filter.label}-${index}`}
                isActive={filter.on}
                label={filter.label ? filter.label : index.toString()}
                onDelete={() => handleDeleteEntry(index)}
                onEdit={() => handleOnEdit(filter, index)}
                onSwitch={() => handleOnSwitch(index)}
              />
            ))}
          </div>
          <button
            className="filters--filter-box--add"
            onClick={() => {
              setNewQuestion(null);
              setNewFilterLabel('');
              setNewOptions([]);
              setIsAdding(true);
            }}
          >
            Add New Filter
          </button>
        </React.Fragment>
      ) : (
        <form onSubmit={submitFilter}>
          <div className="filters--filter-box--filter add-filter">
            <div className="add-filter--group">
              <label htmlFor="New Filter">New Filter</label>
              <input
                value={newFilterLabel}
                placeholder="Filter Label"
                onChange={(e) => setNewFilterLabel(e.target.value)}
              />
            </div>
            <div className="add-filter--group">
              <label htmlFor="">Question</label>
              <Select
                placeholder="Select Question"
                styles={selectStyles}
                options={questionsList}
                value={newQuestion}
                onChange={(questionSelection) => {
                  deselectAllOptions();
                  setNewQuestion(questionSelection);
                }}
              />
            </div>
            <div className="add-filter--group">
              <label htmlFor="New Options">Options</label>
              {newQuestion && (
                <div className="add-filter--group--options">
                  <span
                    className="add-filter--group--options--link"
                    onClick={selectAllOptions}
                  >
                    Select All
                  </span>
                  <span>&nbsp; | &nbsp;</span>
                  <span
                    className="add-filter--group--options--link"
                    onClick={deselectAllOptions}
                  >
                    Deselect All
                  </span>
                </div>
              )}
              {newQuestion ? (
                <div className="filters--filter-box--filter--options">
                  {optionsList[
                    questionsList.findIndex(
                      (question) => question.value === newQuestion.value
                    )
                  ].map((option) => (
                    <div
                      className={`filters--filter-box--filter--options--item ${
                        newOptions &&
                        newOptions.findIndex(
                          (el) => el.value === option.value
                        ) !== -1 &&
                        'selected'
                      }`}
                      key={option.value}
                      onClick={() => {
                        const optionIndex = newOptions
                          ? newOptions.indexOf(option)
                          : -1;

                        if (optionIndex === -1) {
                          setNewOptions((newOptions) =>
                            newOptions.concat(option)
                          );
                        } else {
                          setNewOptions(
                            newOptions
                              ? newOptions.filter(
                                  (el) => el.value !== option.value
                                )
                              : []
                          );
                        }
                      }}
                    >
                      <div className="filters--filter-box--filter--options--item--check">
                        <UilCheck size="14" />
                      </div>
                      <span>{option.label}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div>No Question Selected</div>
              )}
            </div>
          </div>
          <button className="filters--filter-box--add" type="submit">
            {isAdding ? 'Apply Filter' : 'Update Filter'}
          </button>
          <div
            className="filters--filter-box--cancel"
            onClick={() => {
              if (isAdding) {
                setIsAdding(false);
              }
              if (isEditing) {
                setIsEditing(false);
              }
            }}
          >
            Cancel and Go Back
          </div>
        </form>
      )}
    </React.Fragment>
  );
}

export default FilterBox;
