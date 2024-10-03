$(() => {
    const semester = [
        {
            "semlevel": "First Year, First Semester",
            "semsubs": [
                {
                    "course": "NSTP01",
                    "description": "Civic Welfare Training Service 1",
                    "unit": 3,
                    "grade": 1.90,
                    "remarks": "Passed",
                    "term": "First Semester A.Y. 2022-2023"
                },
                {
                    "course": "SCITEC",
                    "description": "Science, Technology and Society",
                    "unit": 3,
                    "grade": 2.10,
                    "remarks": "Passed",
                    "term": "First Semester A.Y. 2022-2023"
                },
                {
                    "course": "INTCOM",
                    "description": "Introduction to Computing",
                    "unit": 3,
                    "grade": 1.60,
                    "remarks": "Passed",
                    "term": "First Semester A.Y. 2022-2023"
                },
                {
                    "course": "COPRO1",
                    "description": "Computer Programming 1",
                    "unit": 3,
                    "grade": 1.60,
                    "remarks": "Passed",
                    "term": "First Semester A.Y. 2022-2023"
                },
                {
                    "course": "COMPOP",
                    "description": "Computer Operations: Office Productivity Software (MS Office)",
                    "unit": 3,
                    "grade": 1.60,
                    "remarks": "Passed",
                    "term": "First Semester A.Y. 2022-2023"
                },
                {
                    "course": "PEDUC1",
                    "description": "Physical Activities Towards Health and Fitness 1",
                    "unit": 2,
                    "grade": 1.60,
                    "remarks": "Passed",
                    "term": "First Semester A.Y. 2022-2023"
                },
                {
                    "course": "JRIZAL",
                    "description": "Life, Works and Writings of Jose Rizal",
                    "unit": 3,
                    "grade": 1.50,
                    "remarks": "Passed",
                    "term": "First Semester A.Y. 2022-2023"
                }
            ]
        },
        {
            "semlevel": "First Year, Second Semester",
            "semsubs": [
                {
                    "course": "OOPROG",
                    "description": "Object-Oriented Programming",
                    "unit": 3,
                    "grade": 1.40,
                    "remarks": "Passed",
                    "term": "Second Semester A.Y. 2022-2023"
                },
                {
                    "course": "ARTAPP",
                    "description": "Art Appreciation",
                    "unit": 3,
                    "grade": 1.40,
                    "remarks": "Passed",
                    "term": "Second Semester A.Y. 2022-2023"
                },
                {
                    "course": "PURCOM",
                    "description": "Purposive Communication",
                    "unit": 3,
                    "grade": 1.70,
                    "remarks": "Passed",
                    "term": "Second Semester A.Y. 2022-2023"
                },
                {
                    "course": "NSTP02",
                    "description": "Civic Welfare Training Service 2",
                    "unit": 3,
                    "grade": 1.40,
                    "remarks": "Passed",
                    "term": "Second Semester A.Y. 2022-2023"
                },
                {
                    "course": "DSTRU1",
                    "description": "Civic Welfare Training Service 2",
                    "unit": 3,
                    "grade": 1.90,
                    "remarks": "Passed",
                    "term": "Second Semester A.Y. 2022-2023"
                },
                {
                    "course": "PEDUC2",
                    "description": "Physical Activities Towards Health and Fitness 2",
                    "unit": 2,
                    "grade": 1.30,
                    "remarks": "Passed",
                    "term": "Second Semester A.Y. 2022-2023"
                },
                {
                    "course": "COPRO2",
                    "description": "Computer Programming 2",
                    "unit": 3,
                    "grade": 1.20,
                    "remarks": "Passed",
                    "term": "Second Semester A.Y. 2022-2023"
                },
                {
                    "course": "GEEL01",
                    "description": "General Education Elective 1",
                    "unit": 3,
                    "grade": 1.70,
                    "remarks": "Passed",
                    "term": "Second Semester A.Y. 2023"
                }
            ]
        },
        {
            "semlevel": "Second Year, First Semester",
            "semsubs": [
                {
                    "course": "ANIMUL",
                    "description": "Animation and Multimedia",
                    "unit": 3,
                    "grade": 1.70,
                    "remarks": "Passed",
                    "term": "First Semester A.Y. 2023-2024"
                },
                {
                    "course": "HUMCOM",
                    "description": "Human Computer Interaction",
                    "unit": 3,
                    "grade": 1.70,
                    "remarks": "Passed",
                    "term": "First Semester A.Y. 2023-2024"
                },
                {
                    "course": "MATMOD",
                    "description": "Mathematics in the Modern World",
                    "unit": 3,
                    "grade": 1.40,
                    "remarks": "Passed",
                    "term": "First Semester A.Y. 2023-2024"
                },
                {
                    "course": "DASTRU",
                    "description": "Data Structures and Algorithms",
                    "unit": 3,
                    "grade": 1.50,
                    "remarks": "Passed",
                    "term": "First Semester A.Y. 2023-2024"
                },
                {
                    "course": "NETWRK",
                    "description": "CCNA Exploration: Network Fundamentals",
                    "unit": 3,
                    "grade": 1.70,
                    "remarks": "Passed",
                    "term": "First Semester A.Y. 2023-2024"
                },
                {
                    "course": "GEEL02",
                    "description": "General Education Elective 2",
                    "unit": 3,
                    "grade": 1.10,
                    "remarks": "Passed",
                    "term": "First Semester A.Y. 2023-2024"
                },
                {
                    "course": "PEDUC3",
                    "description": "Physical Activities Towards Health and Fitness 3",
                    "unit": 2,
                    "grade": null,
                    "remarks": "In Progress
                
            ]
        },
        {
            "semlevel": "Second Year, Second Semester",
            "semsubs":[
                {
                    "course": "UNDSLF",
                    "description": "Understanding the Self",
                    "unit": 3,
                    "grade": 1.80,
                    "remarks": "Passed",
                    "term": "Second Semester A.Y. 2023-2024"
                },
                {
                    "course": "INMANA",
                    "description": "Information Management",
                    "unit": 3,
                    "grade": 1.60,
                    "remarks": "Passed",
                    "term": "Second Semester A.Y. 2023-2024"
                },
                {
                    "course": "EVEDRI",
                    "description": "Event Driven Programming",
                    "unit": 3,
                    "grade": 1.60,
                    "remarks": "Passed",
                    "term": "Second Semester A.Y. 2023-2024"
                },
                {
                    "course": "PROEL1",
                    "description": "Professional Elective 1",
                    "unit": 3,
                    "grade": 1.30,
                    "remarks": "Passed",
                    "term": "Second Semester A.Y. 2023-2024"
                },
                {
                    "course": "TECHNO",
                    "description": "Technopreneurship",
                    "unit": 3,
                    "grade": 1.70,
                    "remarks": "Passed",
                    "term": "Second Semester A.Y. 2023-2024"
                },
                {
                    "course": "GEEL03",
                    "description": "Technopreneurship",
                    "unit": 3,
                    "grade": null,
                    "remarks": null,
                    "term": null
                },
                {
                    "course": "PEDUC4",
                    "description": "Physical Activities Towards Health and Fitness 4",
                    "unit": 2,
                    "grade": null,
                    "remarks": null,
                    "term": null
                }
                
            ]
        },
        {
            "semlevel": "Third Year, First Semester",
            "semsubs": [
                {
                    "course": "SOFENG",
                    "description": "Software Engineering",
                    "unit": 3,
                    "grade": null,
                    "remarks": "In Progress",
                    "term": null
                },
                {
                    "course": "WEBTEC",
                    "description": "Web Technology",
                    "unit": 3,
                    "grade": null,
                    "remarks": "In Progress",
                    "term": null
                },
                {
                    "course": "RESMET",
                    "description": "Research Methods in IT",
                    "unit": 3,
                    "grade": null,
                    "remarks": "In Progress",
                    "term": null
                },
                {
                    "course": "SYSTIN",
                    "description": "System Integration and Architecture",
                    "unit": 3,
                    "grade": null,
                    "remarks": "In Progress",
                    "term": null
                },
                {
                    "course": "MOBAPP_",
                    "description": "Mobile Application",
                    "unit": 3,
                    "grade": null,
                    "remarks": "In Progress",
                    "term": null
                },
                {
                    "course": "PROEL2",
                    "description": "Professional Elective 2",
                    "unit": 3,
                    "grade": null,
                    "remarks": "In Progress",
                    "term": null
                }
            ]
        },
        {
            "semlevel": "Third Year, Second Semester",
            "semsubs": [
                {
                    "course": "CPSTON1",
                    "description": "Capstone Project 1",
                    "unit": 3,
                    "grade": null,
                    "remarks": null,
                    "term": null
                },
                {
                    "course": "SOCPRO",
                    "description": "Social and Professional Issues",
                    "unit": 3,
                    "grade": null,
                    "remarks": null,
                    "term": null
                },
                {
                    "course": "PROEL3",
                    "description": "Professional Elective 3",
                    "unit": 3,
                    "grade": null,
                    "remarks": null,
                    "term": null
                },
                {
                    "course": "PROEL4",
                    "description": "Professional Elective 4",
                    "unit": 3,
                    "grade": null,
                    "remarks": null,
                    "term": null
                },
                {
                    "course": "SYSTAD",
                    "description": "System Administration and Maintenance",
                    "unit": 3,
                    "grade": null,
                    "remarks": null,
                    "term": null
                },
                {
                    "course": "APPDEV",
                    "description": "Application Development and Emerging Technologies",
                    "unit": 3,
                    "grade": null,
                    "remarks": null,
                    "term": null
                }                
            ]
        },
        {
            "semlevel": "Fourth Year, First Semester",
            "semsubs": [

            ]
        },
        {
            "semlevel": "Fourth Year, Second Semester",
            "semsubs": [

            ]
        }
    ];
    const data = [
        {
            "course": "NSTP01",
            "description": "Civic Welfare Training Service 1",
            "unit": 3,
            "grade": 1.90,
            "remarks": "Passed",
            "term": "First Semester A.Y. 2022-2023"
        },
        {
            "course": "SCITEC",
            "description": "Science, Technology and Society",
            "unit": 3,
            "grade": 2.10,
            "remarks": "Passed",
            "term": "First Semester A.Y. 2022-2023"
        },
        {
            "course": "INTCOM",
            "description": "Introduction to Computing",
            "unit": 3,
            "grade": 1.60,
            "remarks": "Passed",
            "term": "First Semester A.Y. 2022-2023"
        },
        {
            "course": "COPRO1",
            "description": "Computer Programming 1",
            "unit": 3,
            "grade": 1.60,
            "remarks": "Passed",
            "term": "First Semester A.Y. 2022-2023"
        },
        {
            "course": "COMPOP",
            "description": "Computer Operations: Office Productivity Software (MS Office)",
            "unit": 3,
            "grade": 1.60,
            "remarks": "Passed",
            "term": "First Semester A.Y. 2022-2023"
        },
        {
            "course": "PEDUC1",
            "description": "Physical Activities Towards Health and Fitness 1",
            "unit": 2,
            "grade": 1.60,
            "remarks": "Passed",
            "term": "First Semester A.Y. 2022-2023"
        },
        {
            "course": "JRIZAL",
            "description": "Life, Works and Writings of Jose Rizal",
            "unit": 3,
            "grade": 1.50,
            "remarks": "Passed",
            "term": "First Semester A.Y. 2022-2023"
        }                
    ];
    
    semester.forEach(item => {
        console.log(item);
        $("#sem-header").append(
            `<tr>
                <td class="sem" colspan="7">${item[""]}</td>
            </tr>`
        )
    })
    data.forEach(item => {
        console.log(item);
        $("#data").append(
            `<tr>
                <td>${item["course"]}</td>
                <td>${item["description"]}</td>
                <td>${item["unit"]}</td>
                <td>${item["grade"]}</td>
                <td>${item["remarks"]}</td>
                <td>${item["course"]}</td>
                <td>${item["term"]}</td>
            </tr>`
        )
    })
});