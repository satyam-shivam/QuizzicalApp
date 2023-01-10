const homePageData = {
    cateories: [
       {type: "Any Category",  value: ""},
       {type: "General Knowladge",  value: "9"},
       {type: "Sports", value: "21"},
       {type: "Politics", value: "24"},
       {type: "Music", value: "12"},
       {type: "History", value: "23"},
       {type: "Science & Computers", value: "18"},
       {type: "Science & Mathematics", value: "19"},
       {type: "Science & Nature", value: "17"},
       {type: "Mythology", value: "20"}
   ],

   diffculties: [
       {type: "Any Difficulty", value: ""}, 
       {type: "Easy", value: "easy"},
       {type: "Medium", value: "medium"}, 
       {type: "Hard", value: "hard"}
   ],

   questionType: [
       {type: "Any Type", value: ""}, 
       {type: "Multiple Choice", value: "multiple"}, 
       {type: "True / False", value: "boolean"}
   ]
}

const styles = {
   wrongAnsColor: {background: "#F8BCBC"},
   correctAnsColor: {background: "#94D7A2"},
   selectColor: {background: "#D6DBF5"}
}

export { homePageData, styles }