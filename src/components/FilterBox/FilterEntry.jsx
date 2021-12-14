import React, { useState, useRef } from 'react';
import { Switch } from '../Switch';
import { UilEllipsisV } from '@iconscout/react-unicons';
import './FilterEntry.css';

const FilterEntry = ({
    isActive,
    label,
    onDelete,
    onEdit,
    onSwitch
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const ref = useRef();

    return (
        <div ref={ref} className="filters--filter-box--filter--entry">
            <div className="filters--filter-box--filter--entry--content">
                <Switch defaultState={isActive} onChange={onSwitch} />
                <span>{label}</span>
            </div>
            <span
                className="filters--filter-box--filter--entry--menu"
                onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
            >
                <UilEllipsisV size="16" />
            </span>
            {isMenuOpen && (
                <div className="filters--filter-box--filter--entry--menu--expanded">
                    <div className="entry-menu--item" onClick={onEdit}>
                        Edit Filter
                    </div>
                    <div
                        className="entry-menu--item"
                        onClick={() => {
                            onDelete();
                            setIsMenuOpen(false);
                        }}
                    >
                        Delete Filter
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterEntry;
