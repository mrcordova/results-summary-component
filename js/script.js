import data from '../data.json' assert {type: 'json'};


window.addEventListener('load', () => {

    let finalScore = 0;
    
    for (const item of data) {
        const divCategory = document.getElementById(`${item.category.toLocaleLowerCase()}`);
        const imgIcon = divCategory.querySelector('img');
        const paraTitle = divCategory.querySelector('.icon-con>p');
        const paraScore = divCategory.querySelectorAll('p')[1].childNodes[0];
        
        imgIcon.src = `${item.icon}`;
        paraTitle.textContent = `${item.category}`;
        paraScore.textContent = `${item.score}`;
    
        finalScore += item.score;
    }
    const h1FinalScore = document.querySelector('.final-score-con>h1');
    
    h1FinalScore.textContent = `${(finalScore / data.length).toFixed(0)}`;
})
