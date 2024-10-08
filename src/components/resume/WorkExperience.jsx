const WorkExperience = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Maven Securities",
        yearsActive: "June 2022 - Present",
        information: [
            "Contributed to an event-based options volatility fitter using an underlying Extended Kalman Filter. Made improvements to support internal pricing and error minimization computation.",
            "Contributed to an offset fitter reliant on European options call-put parity using least squares linear regression and Kalman filtering. Enhanced robustness and added submission throttling to downstream applications.",
            "Implemented low latency pricing methods for volatility future instruments in the base c++ library, with method wrappers in c#, python and Julia."
        ],
    },
    {
        id: 2,
        title: "Data Management and Research Intern ",
        company: "APT Portfolio",
        yearsActive: "May 2021 - July 2021",
        information: [
            "Achieved 95% reduction in latency & 82% reduction in storage by adding ClickHouse OLAP database support to apps",
            "Designed a C++ application to generate trading indicators such as OHLC, VWAP and TWAP from Protobuf data",
        ],
    },
    {
        id: 3,
        title: "Data Science Intern",
        company: "Unbxd",
        yearsActive: "May 2020 - July 2020",
        information: [
            "Devised synonym generation algorithms to improve query understanding and return more relevant search results",
            "Performed query extraction on clickstream data with Sklearn, and NLTK using linguistic and statistical models"
        ],
    }
];

export default WorkExperience;
