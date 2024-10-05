$(() => {

    const data = [
        //1st Sem
        {
            "sem-level": "First Year, First Semester",
            "course-header": "Course",
            "description-header": "Description",
            "unit-header": "Unit",
            "grade-header": "Grade",
            "remarks-header": "Remarks",
            "term-header": "Term"
        },
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
        },
        //2nd Sem
        {
            "sem-level": "First Year, Second Semester",
            "course-header": "Course",
            "description-header": "Description",
            "unit-header": "Unit",
            "grade-header": "Grade",
            "remarks-header": "Remarks",
            "term-header": "Term"
        },
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
        },
        //3rd Sem
        {
            "sem-level": "Second Year, First Semester",
            "course-header": "Course",
            "description-header": "Description",
            "unit-header": "Unit",
            "grade-header": "Grade",
            "remarks-header": "Remarks",
            "term-header": "Term"
        },
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
            "grade": "",
            "remarks": "In Progress"
        },
        //4th Sem
        {
            "sem-level": "Second Year, Second Semester",
            "course-header": "Course",
            "description-header": "Description",
            "unit-header": "Unit",
            "grade-header": "Grade",
            "remarks-header": "Remarks",
            "term-header": "Term"
        },
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
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "PEDUC4",
            "description": "Physical Activities Towards Health and Fitness 4",
            "unit": 2,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        //5th Sem
        {
            "sem-level": "Third Year, First Semester",
            "course-header": "Course",
            "description-header": "Description",
            "unit-header": "Unit",
            "grade-header": "Grade",
            "remarks-header": "Remarks",
            "term-header": "Term"
        },
        {
            "course": "SOFENG",
            "description": "Software Engineering",
            "unit": 3,
            "grade": "",
            "remarks": "In Progress",
            "term": ""
        },
        {
            "course": "WEBTEC",
            "description": "Web Technology",
            "unit": 3,
            "grade": "",
            "remarks": "In Progress",
            "term": ""
        },
        {
            "course": "RESMET",
            "description": "Research Methods in IT",
            "unit": 3,
            "grade": "",
            "remarks": "In Progress",
            "term": ""
        },
        {
            "course": "SYSTIN",
            "description": "System Integration and Architecture",
            "unit": 3,
            "grade": "",
            "remarks": "In Progress",
            "term": ""
        },
        {
            "course": "MOBAPP_",
            "description": "Mobile Application",
            "unit": 3,
            "grade": "",
            "remarks": "In Progress",
            "term": ""
        },
        {
            "course": "PROEL2",
            "description": "Professional Elective 2",
            "unit": 3,
            "grade": "",
            "remarks": "In Progress",
            "term": ""
        },
        //6th Sem
        {
            "sem-level": "Third Year, Second Semester",
            "course-header": "Course",
            "description-header": "Description",
            "unit-header": "Unit",
            "grade-header": "Grade",
            "remarks-header": "Remarks",
            "term-header": "Term"
        },
        {
            "course": "CPSTON1",
            "description": "Capstone Project 1",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "SOCPRO",
            "description": "Social and Professional Issues",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "PROEL3",
            "description": "Professional Elective 3",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "PROEL4",
            "description": "Professional Elective 4",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "SYSTAD",
            "description": "System Administration and Maintenance",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "APPDEV",
            "description": "Application Development and Emerging Technologies",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        //7th Sem
        {
            "sem-level": "Fourth Year, First Semester",
            "course-header": "Course",
            "description-header": "Description",
            "unit-header": "Unit",
            "grade-header": "Grade",
            "remarks-header": "Remarks",
            "term-header": "Term"
        },
        {
            "course": "CONWOR",
            "description": "The Contemporary World",
            "unit": 3,
            "grade": 1.50,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2023-2024"
        },
        {
            "course": "OPESYS",
            "description": "Operating Systems",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "ITPRA1",
            "description": "IT Practicum 1 (250 Hours)",
            "unit": 5,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "CPSTON2",
            "description": "Capstone Project 2",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "INFASS",
            "description": "Information Assurance and Security",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        //8th Sem
        {
            "sem-level": "Fourth Year, Second Semester",
            "course-header": "Course",
            "description-header": "Description",
            "unit-header": "Unit",
            "grade-header": "Grade",
            "remarks-header": "Remarks",
            "term-header": "Term"
        },
        {
            "course": "PHIHIS",
            "description": "Readings in Philippine History",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "PLATEC",
            "description": "Platform Technologies",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "ETHICS",
            "description": "Ethics",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "ITPRA2",
            "description": "IT Practicum 2 (250 Hours)",
            "unit": 5,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "BUSANA",
            "description": "Business Analytics",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        }
        
    ];
    data.forEach(item => {
        if (item["sem-level"]) {
            $("#data").append(
                `<tr>
                    <td colspan="6" class="sem-level">${item["sem-level"]}</td>
                </tr>
                <tr class="sem-header">
                    <td>${item["course-header"]}</td>
                    <td>${item["description-header"]}</td>
                    <td>${item["unit-header"]}</td>
                    <td>${item["grade-header"]}</td>
                    <td>${item["remarks-header"]}</td>
                    <td>${item["term-header"]}</td>
                </tr>`
            )
        }
        else if (item["remarks"] == "In Progress") {
            $("#data").append(
                `<tr class="in-progress">X
                    <td>${item["course"]}</td>
                    <td>${item["description"]}</td>
                    <td>${item["unit"]}</td>
                    <td>${item["grade"]}</td>
                    <td>${item["remarks"]}</td>
                    <td>${item["term"]}</td>
                </tr>`
            )
        }
        else if (item["grade"] == "") {
            $("#data").append(
                `<tr class="not-taken">
                    <td>${item["course"]}</td>
                    <td>${item["description"]}</td>
                    <td>${item["unit"]}</td>
                    <td>${item["grade"]}</td>
                    <td>${item["remarks"]}</td>
                    <td>${item["term"]}</td>
                </tr>`
            )
        }
        else {
            $("#data").append(
                `<tr>
                    <td>${item["course"]}</td>
                    <td>${item["description"]}</td>
                    <td>${item["unit"]}</td>
                    <td>${item["grade"]}</td>
                    <td>${item["remarks"]}</td>
                    <td>${item["term"]}</td>
                </tr>`
            )
        }
    })
});