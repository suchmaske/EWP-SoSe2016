let pokemon = [
        [
            "1",
            "Bisasam",
            "Pflanze"
        ],
        [
            "4",
            "Glumanda",
            "Feuer"
        ],
        [
            "7",
            "Schiggy",
            "Wasser"
        ]
    ];


$("#poketable").DataTable({
    "aaData" : pokemon
});