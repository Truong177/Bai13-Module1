function trans() {
    let eng = ["banana", "apple", "orange", "grape","lemon"]
    let vie = ["Chuối" , "Táo" , "Cam" , "Nho" , "Chanh" ]
    let trans = document.getElementById("trans").value;
    let index_eng = 0;
    let result = "";
    for (let i = 0; i < eng.length; i++) {
        if (trans === eng[i]){
            index_eng = i;
            for (let j = 0; j < vie.length; j++) {
                if (index_eng === j){
                    result = vie[j]
                }
            }
        }
    }
    document.getElementById("result").innerHTML = result;
}