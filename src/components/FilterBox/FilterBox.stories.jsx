import React from "react";
import FilterBox from "./FilterBox";

export default {
    title: "FilterBox",
    component: FilterBox,
    description: `FilterBox.`,
    argTypes: {},
};



//👇 We create a “template” of how args map to rendering
const Template = (args) => (
    <div style={{
        'border-radius': '3px',
        'width': '300px',
        'background-color': '#fff',
        'position': 'absolute',
        'text-align': 'center',
        'user-select': 'none',
        'min-height': '100px',
        'z-index': '15700',
        '-webkit-box-shadow': '0px 3px 18px -2px rgba(0, 0, 0, 0.15)',
        'box-shadow': '0px 3px 18px -2px rgba(0, 0, 0, 0.15)',
        'padding': '10px 16px',
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-khtml-user-select': 'none',
        '-ms-user-select': 'none'
    }}>
        <FilterBox {...args} />
    </div>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
    questions: [
    {
        "age": [
            {
                "text": "<18",
                "value": "1",
                "id": 1,
                "baseScore": 0,
                "stubScore": 0,
                "stubScores": {
                    "age": {}
                }
            },
            {
                "text": "18-24",
                "value": "2",
                "id": 2,
                "baseScore": 13,
                "stubScore": 0,
                "stubScores": {
                    "age": {
                        "Source": 13
                    }
                }
            },
            {
                "text": "25-34",
                "value": "3",
                "id": 3,
                "baseScore": 38,
                "stubScore": 3,
                "stubScores": {
                    "age": {
                        "Source": 38
                    }
                }
            }
        ],
        "id": 1,
        "type": "single_choice",
        "title": "age",
        "options": [
            {
                "id": 1,
                "label": "<18",
                "texts": [
                    {
                        "language": "en",
                        "text": "<18"
                    }
                ],
                "altTexts": [],
                "randomizeOption": false,
                "tags": [],
                "value": "1",
                "mediaURL": null,
                "color": null,
                "coordinates": null,
                "pictureURL": null
            },
            {
                "id": 2,
                "label": "18-24",
                "texts": [
                    {
                        "language": "en",
                        "text": "18-24"
                    }
                ],
                "altTexts": [],
                "randomizeOption": false,
                "tags": [],
                "value": "2",
                "mediaURL": null,
                "color": null,
                "coordinates": null,
                "pictureURL": null
            },
            {
                "id": 3,
                "label": "25-34",
                "texts": [
                    {
                        "language": "en",
                        "text": "25-34"
                    }
                ],
                "altTexts": [],
                "randomizeOption": false,
                "tags": [],
                "value": "3",
                "mediaURL": null,
                "color": null,
                "coordinates": null,
                "pictureURL": null
            }
        ],
        "sig_type": "single"
    },
    {
        "gender": [
            {
                "text": "Male",
                "value": "1",
                "id": 10
            },
            {
                "text": "Female",
                "value": "2",
                "id": 11
            },
            {
                "text": "Other",
                "value": "3",
                "id": 12
            }
        ],
        "id": 9006,
        "type": "single_choice",
        "title": "gender",
        "options": [
            {
                "id": 10,
                "label": "Male",
                "texts": [
                    {
                        "language": "en",
                        "text": "Male"
                    }
                ],
                "altTexts": [],
                "randomizeOption": false,
                "tags": [],
                "value": "1",
                "mediaURL":  null,
                "color": null,
                "coordinates": null,
                "pictureURL": null
            },
            {
                "id": 11,
                "label": "Female",
                "texts": [
                    {
                        "language": "en",
                        "text": "Female"
                    }
                ],
                "altTexts": [],
                "randomizeOption": false,
                "tags": [],
                "value": "2",
                "mediaURL":null,
                "color": null,
                "coordinates": null,
                "pictureURL": null
            },
            {
                "id": 12,
                "label": "Other",
                "texts": [
                    {
                        "language": "en",
                        "text": "Other"
                    }
                ],
                "altTexts": [],
                "randomizeOption": false,
                "tags": [],
                "value": "3",
                "mediaURL": null,
                "color": null,
                "coordinates": null,
                "pictureURL": null
            }
        ],
        "sig_type": "single"
    }
    ],
    close: () => { },
    textAnalytics: [],
    filters: [],
    dispatch: () => { },
    qTypes: {
        OPEN: 'open',
        MULTIPLE_CHOICE: 'multiple_choice',
        SINGLE_CHOICE: 'single_choice',
    }
};

export const WithFilterProps = Template.bind({});
WithFilterProps.args = {
    questions: [
    {
        "age": [
            {
                "text": "<18",
                "value": "1",
                "id": 1,
                "baseScore": 0,
                "stubScore": 0,
                "stubScores": {
                    "age": {}
                }
            },
            {
                "text": "18-24",
                "value": "2",
                "id": 2,
                "baseScore": 13,
                "stubScore": 0,
                "stubScores": {
                    "age": {
                        "Source": 13
                    }
                }
            },
            {
                "text": "25-34",
                "value": "3",
                "id": 3,
                "baseScore": 38,
                "stubScore": 3,
                "stubScores": {
                    "age": {
                        "Source": 38
                    }
                }
            }
        ],
        "id": 9005,
        "type": "single_choice",
        "title": "age",
        "options": [
            {
                "id": 1,
                "label": "<18",
                "texts": [
                    {
                        "language": "en",
                        "text": "<18"
                    }
                ],
                "altTexts": [],
                "randomizeOption": false,
                "tags": [],
                "value": "1",
                "mediaURL": null,
                "color": null,
                "coordinates": null,
                "pictureURL": null
            },
            {
                "id": 2,
                "label": "18-24",
                "texts": [
                    {
                        "language": "en",
                        "text": "18-24"
                    }
                ],
                "altTexts": [],
                "randomizeOption": false,
                "tags": [],
                "value": "2",
                "mediaURL": null,
                "color": null,
                "coordinates": null,
                "pictureURL": null
            },
            {
                "id": 3,
                "label": "25-34",
                "texts": [
                    {
                        "language": "en",
                        "text": "25-34"
                    }
                ],
                "altTexts": [],
                "randomizeOption": false,
                "tags": [],
                "value": "3",
                "mediaURL": null,
                "color": null,
                "coordinates": null,
                "pictureURL": null
            }
        ],
        "sig_type": "single"
    },
    {
        "gender": [
            {
                "text": "Male",
                "value": "1",
                "id": 10
            },
            {
                "text": "Female",
                "value": "2",
                "id": 11
            },
            {
                "text": "Other",
                "value": "3",
                "id": 12
            }
        ],
        "id": 9006,
        "type": "single_choice",
        "title": "gender",
        "options": [
            {
                "id": 10,
                "label": "Male",
                "texts": [
                    {
                        "language": "en",
                        "text": "Male"
                    }
                ],
                "altTexts": [],
                "randomizeOption": false,
                "tags": [],
                "value": "1",
                "mediaURL": null,
                "color": null,
                "coordinates": null,
                "pictureURL": null
            },
            {
                "id": 11,
                "label": "Female",
                "texts": [
                    {
                        "language": "en",
                        "text": "Female"
                    }
                ],
                "altTexts": [],
                "randomizeOption": false,
                "tags": [],
                "value": "2",
                "mediaURL": null,
                "color": null,
                "coordinates": null,
                "pictureURL": null
            },
            {
                "id": 12,
                "label": "Other",
                "texts": [
                    {
                        "language": "en",
                        "text": "Other"
                    }
                ],
                "altTexts": [],
                "randomizeOption": false,
                "tags": [],
                "value": "3",
                "mediaURL": null,
                "color": null,
                "coordinates": null,
                "pictureURL": null
            }
        ],
        "sig_type": "single"
    }
    ],
    close: () => { },
    textAnalytics: [],
    filters: [
        {
            id:"d4e6c6f8-4c57-4532-a8a0-39f0981a001e",
            label:"age Filter",
            on: true,
            options: [{
                label: "18-24",
                value: "2"
            }],
            question: [{
                label: "age",
                type: "single_choice",
                value: 9005
            }]
        }
    ],
    dispatch: () => { },
    qTypes: {
        OPEN: 'open',
        MULTIPLE_CHOICE: 'multiple_choice',
        SINGLE_CHOICE: 'single_choice',
    }
};
