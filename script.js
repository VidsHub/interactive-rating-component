let rate = 0;
function selectedRating()
{
    if (rate==0) {
        alert("Please select a rating");
        return;
    }
    document.querySelectorAll(".rate").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".response").forEach(a=>a.style.display = "flex");
    let txt = document.getElementById('star_value');
    txt.innerHTML = rate;  
}
function rating(value) {
    for(let i = 1; i<=5; i++) {
        let x = document.getElementById(i);
        x.style.backgroundColor = '#1e2421';
    }
    let index = document.getElementById(value);
    index.style.backgroundColor = '#fb7413';
    rate=value;
}
