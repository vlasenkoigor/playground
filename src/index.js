
const wrapper = document.querySelector('#wrapper');



function createSelect(data = []){
    const select1 = document.createElement('select');

    for (const op of data){
        const option = document.createElement('option');
        option.value = op;
        option.text = op;
        select1.appendChild(option);
    }
    return select1
}


const select1 = createSelect(['option_1']);
const select2 = createSelect(Array.from(new Array(10), (_,i)=>{return `option_${i+1}`}));

wrapper.appendChild(select1);
wrapper.appendChild(select2);


select1.disabled = true;
select2.autofocus = true;
