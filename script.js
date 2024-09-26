$(() => {

    const data = [
        {
            "course": "NSTP",
            "description": "Civic Welfare Training Service 1",
            "unit": 3,
            "grade": 1.3
        },
        {
            "course": "NSTP",
            "description": "Civic Welfare Training Service 1",
            "unit": 3,
            "grade": 1.3
        },
        {
            "course": "NSTP",
            "description": "Civic Welfare Training Service 1",
            "unit": 3,
            "grade": 1.3
        }
    ];

    data.forEach(item => {
        console.log(item);
        $("#table-with-js").append(
            `<tr class="sem-header">
            <td>${item["course"]}</td>
            <td>${item["description"]}</td>
            <td>${item["unit"]}</td>
            <td>${item["grade"]}</td>
            <td>${item["Remarks"]}</td>
            <td>${item["Course"]}</td>
            <td>${item["Term"]}</td>
            </tr>`
        )
    })
});