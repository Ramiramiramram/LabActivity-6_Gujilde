$(() => {

    const data = [
        {
            "course": "Course",
            "description": "Description",
            "unit": "Unit",
            "grade": "Grade",
            "remarks": "Remarks",
            "term": "Term"
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
            "grade": 2.0,
            "remarks": "Passed",
            "term": "First Semester A.Y. 2022-2023"
        }
    ];

    data.forEach(item => {
        console.log(item);
        $("#table-with-js").append(
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