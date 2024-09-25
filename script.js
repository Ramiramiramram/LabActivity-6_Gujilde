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
        console.log(item)
        $("#table-with-js").append({})
    })
    
});