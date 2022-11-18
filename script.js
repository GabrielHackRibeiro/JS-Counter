// set a var

var count = 0;

// select value and buttons
var value = document.querySelector('#value');
var btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
            
        }else if(styles.contains("increase")){
            count++;
        }else{
            count = 0;
        }if(count<0){
            value.style.color = '#de0f01';
        }else if(count>0){
            value.style.color = '#12532b';
        }else{
            value.style.color = '#222';
        }
        value.innerHTML = count;
    })
})

