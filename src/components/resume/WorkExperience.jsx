const WorkExperience = [
    {
        id: 4, title: "ML Inference Intern", company: "Startup", yearsActive: "Current internship",
        information: ["Interning at a startup in the machine learning inference domain."]
    },
    {
        id: 5, title: "SDE Intern", company: "AWS", yearsActive: "Internship",
        information: ["Built AI/LLM agents during a software development engineering internship."]
    },
    {
        id: 6, title: "MS in Computer Science", company: "Georgia Tech", yearsActive: "Current graduate studies",
        information: ["Left Maven Securities to pursue an MS in Computer Science.", "Focus: systems for machine learning, CUDA, distributed systems, and ML inference optimization."]
    },
    {
        id: 7, title: "Mathematics & Computer Science", company: "IIT Delhi", yearsActive: "Undergraduate studies",
        information: ["Foundation in mathematics and computer science."]
    },
    {
        id: 1,
        title: "Software Engineer",
        company: "Maven Securities",
        yearsActive: "Previous role · before Georgia Tech",
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
