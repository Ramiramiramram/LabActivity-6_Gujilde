$(() => {
    //Jeff, ako ra ni gi ka 3 kay ako ra gisuwayan
    const semester = [
        {
            "sem": "First Year, First Semester"
        }
    ];
    const header = [
        {
            "course-header": "Course",
            "description-header": "Description",
            "uni-header": "Unit",
            "grade-header": "Grade",
            "remarks-header": "Remarks",
            "term-header": "Term"
        }
    ];
    // kani rajud unta nga const data ang kailangan
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

    //same diri nga 3 kabuok ang forEach pero ana si sir ganiha 1 raman daw kailangan
    
    semester.forEach(item => {
        console.log(item);
        $("#sem-header").append(
            `<tr>
                <td class="sem" colspan="7">${item["sem"]}</td>
            </tr>`
        )
    })
    header.forEach(item => {
        console.log(item);
        $("#header").append(
            `<tr class="sem-header">
                <td>${item["course-header"]}</td>
                <td>${item["description-header"]}</td>
                <td>${item["unit-header"]}</td>
                <td>${item["grade-header"]}</td>
                <td>${item["remarks-header"]}</td>
                <td>${item["course-header"]}</td>
                <td>${item["term-header"]}</td>
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