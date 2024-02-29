let btn_click = document.querySelector('#btn_click')
let money = document.querySelector('.money')
let level_1 = document.querySelector('.level_1')
let level_2 = document.querySelector('.level_2')
let level_3 = document.querySelector('.level_3')
let clicker_avto = document.querySelector('.clicker_avto')
let chislo = document.querySelector('#chislo')
let chislo2 = document.querySelector('#chislo2')
let chislo3 = document.querySelector('#chislo3')
let image_lv1 = document.querySelector('#image_lv1')
let UpHouse = document.querySelector('#UpHouse')
let magazine_1 = document.querySelector('.magazine_1')
let magazine_2 = document.querySelector('.magazine_2')
let magazine_3 = document.querySelector('.magazine_3')
let level_1_magazine = document.querySelector('.level_1_magazine')
let level_2_magazine = document.querySelector('.level_2_magazine')
let level_3_magazine = document.querySelector('.level_3_magazine')
let level_4_magazine = document.querySelector('.level_4_magazine')
let level_5_magazine = document.querySelector('.level_5_magazine')
let level_6_magazine = document.querySelector('.level_6_magazine')
let level_7_magazine = document.querySelector('.level_7_magazine')
let level_8_magazine = document.querySelector('.level_8_magazine')
let level_9_magazine = document.querySelector('.level_9_magazine')
let level_10_magazine = document.querySelector('.level_10_magazine')
let score = 0;
let update = 1;
let update_score = 0;
let update_house = 50;
btn_click.addEventListener('click', function(){
    score += update;
    money.textContent = Math.floor(score) + '$';
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // предотвращаем действие по умолчанию для клавиши Enter
    }
});

// ... остальной код ...
function startAutoClick() {
    autoClickInterval = setInterval(function() {
        score += update;
        money.textContent = Math.floor(score) + '$';
    }, 1000);
}

let multiplier = 1.2;
clicker_avto.addEventListener('click', function() {
    let cost = 4000;
    if(score >= cost) {
        score -= cost;
        money.textContent = Math.floor(score) + '$';
        update += 1;

        startAutoClick();
        let element = document.querySelector('.clicker_avto');
        element.style.transition = "opacity 1s"; // добавляем transition для плавного исчезновения
        element.style.opacity = 0; // задаем нулевую прозрачность
        setTimeout(function() {
          element.style.display = 'none'; // убираем элемент из потока документа после анимации
        }, 1000); // 1000ms = 1s
    } else {
        alert('У вас недостаточно средств');
    }
});
let cost = 50;  // Переменная cost теперь определена вне обработчика события
let cost2 = 500;
let cost3 = 1000;
let cost4 = 1500;
let cost5 = 3000;
let cost6 = 10000;
let cost7 = 50000;
let cost8 = 100000;
let cost9 = 500000;
let cost10 = 1000000;
let cost11 = 5000000;
let cost12 = 15000000;
let cost13 = 50000000;
level_1.addEventListener('click', function() {
    if (score >= cost) {
        score -= cost;
        cost = Math.floor(cost * multiplier); // Обновление значения cost
        update++;
        money.textContent = score + '$';
        chislo.innerHTML = '<img src="fr2w.png" alt="">+1 level ' + cost + '$';
    } else {
        alert('У вас недостаточно средств');
    }
});

level_2.addEventListener('click', function() {
    if (score >= cost2) {
        score -= cost2;
        cost2 = Math.floor(cost2 * multiplier); // Обновление значения cost
        update = update + 5;
        money.textContent = score + '$';
        chislo2.innerHTML = '<img src="fr2w.png" alt="">+1 level ' + cost2 + '$';
    } else {
        alert('У вас недостаточно средств');
    }
});

level_3.addEventListener('click', function() {
    if (score >= cost3) {
        score -= cost3;
        cost3 = Math.floor(cost3 * multiplier); // Обновление значения cost
        update = update + 10;
        money.textContent = score + '$';
        chislo3.innerHTML = '<img src="fr2w.png" alt="">+1 level ' + cost3 + '$';
    } else {
        alert('У вас недостаточно средств');
    }
});

let magazineCount1 = 0; // переменная для отслеживания количества созданных блоков magazine_1
let magazineCount2 = 0;
let magazineCount3 = 0;
let magazineCount4 = 0;
let magazineCount5 = 0;
let magazineCount6 = 0;
let magazineCount7 = 0;
let magazineCount8 = 0;
let magazineCount9 = 0;
let magazineCount10 = 0;
level_1_magazine.addEventListener('click', function() {
 // проверяем, что количество блоков меньше 20
    if (score >= cost4) {
      score -= cost4;
      update = update + 25;
      cost4 = Math.floor(cost4 * multiplier); // Обновление значения cost
      update++;
      level_1_magazine.textContent = cost4 +'$';
      level_1_magazine.innerHTML = '<img src="Remove-bg.ai_1708935583971.png" alt="">+1 level ' + cost4 + '$';
      if (magazineCount1 < 20) { 
      // Создаем новый блок magazine_1 с изображением и добавляем его в блок magazine_center
      let newMagazine = document.createElement('div');
      newMagazine.classList.add('magazine_1');
      newMagazine.innerHTML = '<img src="Remove-bg.ai_1708935583971.png" alt="">';
      document.querySelector('.magazine_1_wrapper').appendChild(newMagazine);
      
      magazineCount1++; // увеличиваем счетчик созданных блоков      

    } 
  } 
});
level_2_magazine.addEventListener('click', function() {
    // проверяем, что количество блоков меньше 20
       if (score >= cost5) {
         score -= cost5;
         update = update + 50;
         cost5 = Math.floor(cost5 * multiplier); // Обновление значения cost
         update++;
         level_2_magazine.textContent = cost5 +'$';
         level_2_magazine.innerHTML = '<img src="Remove-bg.ai_1708936900997.png" alt="">+1 level ' + cost5 + '$';
         if (magazineCount2 < 20) { 
         // Создаем новый блок magazine_1 с изображением и добавляем его в блок magazine_center
         let newMagazine = document.createElement('div');
         newMagazine.classList.add('magazine_2');
         newMagazine.innerHTML = '<img src="Remove-bg.ai_1708936900997.png" alt="">';
         document.querySelector('.magazine_2_wrapper').appendChild(newMagazine);
         
         magazineCount2++; // увеличиваем счетчик созданных блоков      
   
       } 
     } 
   });
   level_3_magazine.addEventListener('click', function() {
    // проверяем, что количество блоков меньше 20
       if (score >= cost6) {
         score -= cost6;
         update = update + 75;
         cost6 = Math.floor(cost6 * multiplier); // Обновление значения cost
         update++;
         level_3_magazine.textContent = cost6 + ' ' + '$';
         level_3_magazine.innerHTML = '<img src="Remove-bg.ai_1709023745506.png" alt="">+1 level ' + cost6 + '$';
         if (magazineCount3 < 20) { 
         // Создаем новый блок magazine_1 с изображением и добавляем его в блок magazine_center
         let newMagazine = document.createElement('div');
         newMagazine.classList.add('magazine_3');
         newMagazine.innerHTML = '<img src="Remove-bg.ai_1709023745506.png" alt="">';
         document.querySelector('.magazine_3_wrapper').appendChild(newMagazine);
         
         magazineCount3++; // увеличиваем счетчик созданных блоков      
   
       } 
     } 
   });
   level_4_magazine.addEventListener('click', function() {
    // проверяем, что количество блоков меньше 20
       if (score >= cost7) {
         score -= cost7;
         update = update + 250;
         cost7 = Math.floor(cost6 * multiplier); // Обновление значения cost
         update++;
         level_4_magazine.textContent = cost7 + ' ' + '$';
         level_4_magazine.innerHTML = '<img src="magazin4.png" alt="">+1 level ' + cost7 + '$';
         if (magazineCount4 < 20) { 
         // Создаем новый блок magazine_1 с изображением и добавляем его в блок magazine_center
         let newMagazine = document.createElement('div');
         newMagazine.classList.add('magazine_4');
         newMagazine.innerHTML = '<img src="magazin4.png" alt="">';
         document.querySelector('.magazin_4_wrapper').appendChild(newMagazine);
         
         magazineCount4++; // увеличиваем счетчик созданных блоков      
   
       } 
     } 
   });
   level_5_magazine.addEventListener('click', function() {
    // проверяем, что количество блоков меньше 20
       if (score >= cost8) {
         score -= cost8;
         update = update + 500;
         cost8 = Math.floor(cost6 * multiplier); // Обновление значения cost
         update++;
         level_5_magazine.textContent = cost8 + ' ' + '$';
         level_5_magazine.innerHTML = '<img src="magazine5.png" alt="">+1 level ' + cost8 + '$';
         if (magazineCount5 < 20) { 
         // Создаем новый блок magazine_1 с изображением и добавляем его в блок magazine_center
         let newMagazine = document.createElement('div');
         newMagazine.classList.add('magazine_5');
         newMagazine.innerHTML = '<img src="magazine5.png" alt="">';
         document.querySelector('.magazine_5_wrapper').appendChild(newMagazine);
         
         magazineCount5++; // увеличиваем счетчик созданных блоков      
   
       } 
     } 
   });
   level_6_magazine.addEventListener('click', function() {
    // проверяем, что количество блоков меньше 20
       if (score >= cost9) {
         score -= cost9;
         update = update + 1000;
         cost9 = Math.floor(cost6 * multiplier); // Обновление значения cost
         update++;
         level_6_magazine.textContent = cost9 + ' ' + '$';
         level_6_magazine.innerHTML = '<img src="magazine6.png" alt="">+1 level ' + cost9 + '$';
         if (magazineCount6 < 20) { 
         // Создаем новый блок magazine_1 с изображением и добавляем его в блок magazine_center
         let newMagazine = document.createElement('div');
         newMagazine.classList.add('magazine_6');
         newMagazine.innerHTML = '<img src="magazine6.png" alt="">';
         document.querySelector('.magazine_6_wrapper').appendChild(newMagazine);
         
         magazineCount6++; // увеличиваем счетчик созданных блоков      
   
       } 
     } 
   });
   level_7_magazine.addEventListener('click', function() {
    // проверяем, что количество блоков меньше 20
       if (score >= cost10) {
         score -= cost10;
         update = update + 1650;
         cost10 = Math.floor(cost10 * multiplier); // Обновление значения cost
         update++;
         level_7_magazine.textContent = cost10 + ' ' + '$';
         level_7_magazine.innerHTML = '<img src="magazine7.png" alt="">+1 level ' + cost10 + '$';
         if (magazineCount7 < 20) { 
         // Создаем новый блок magazine_1 с изображением и добавляем его в блок magazine_center
         let newMagazine = document.createElement('div');
         newMagazine.classList.add('magazine_7');
         newMagazine.innerHTML = '<img src="magazine7.png" alt="">';
         document.querySelector('.magazine_7_wrapper').appendChild(newMagazine);
         
         magazineCount7++; // увеличиваем счетчик созданных блоков      
   
       } 
     } 
   });
   level_8_magazine.addEventListener('click', function() {
    // проверяем, что количество блоков меньше 20
       if (score >= cost11) {
         score -= cost11;
         update = update + 3500;
         cost11 = Math.floor(cost11 * multiplier); // Обновление значения cost
         update++;
         level_8_magazine.textContent = cost10 + ' ' + '$';
         level_8_magazine.innerHTML = '<img src="magazine8.png" alt="">+1 level ' + cost11 + '$';
         if (magazineCount8 < 20) { 
         // Создаем новый блок magazine_1 с изображением и добавляем его в блок magazine_center
         let newMagazine = document.createElement('div');
         newMagazine.classList.add('magazine_8');
         newMagazine.innerHTML = '<img src="magazine8.png" alt="">';
         document.querySelector('.magazine_8_wrapper').appendChild(newMagazine);
         
         magazineCount8++; // увеличиваем счетчик созданных блоков      
   
       } 
     } 
   });
   level_9_magazine.addEventListener('click', function() {
    // проверяем, что количество блоков меньше 20
       if (score >= cost12) {
         score -= cost12;
         update = update + 10000;
         cost12 = Math.floor(cost12 * multiplier); // Обновление значения cost
         update++;
         level_9_magazine.textContent = cost12 + ' ' + '$';
         level_9_magazine.innerHTML = '<img src="magazine9.png" alt="">+1 level ' + cost12 + '$';
         if (magazineCount9 < 20) { 
         // Создаем новый блок magazine_1 с изображением и добавляем его в блок magazine_center
         let newMagazine = document.createElement('div');
         newMagazine.classList.add('magazine_9');
         newMagazine.innerHTML = '<img src="magazine9.png" alt="">';
         document.querySelector('.magazine_9_wrapper').appendChild(newMagazine);
         
         magazineCount9++; // увеличиваем счетчик созданных блоков      
   
       } 
     } 
   });
   level_10_magazine.addEventListener('click', function() {
    // проверяем, что количество блоков меньше 20
       if (score >= cost13) {
         score -= cost13;
         update = update + 25000;
         cost13 = Math.floor(cost13 * multiplier); // Обновление значения cost
         update++;
         level_10_magazine.textContent = cost13 + ' ' + '$';
         level_10_magazine.innerHTML = '<img src="magazine10.png" alt="">+1 level ' + cost13 + '$';
         if (magazineCount10 < 20) { 
         // Создаем новый блок magazine_1 с изображением и добавляем его в блок magazine_center
         let newMagazine = document.createElement('div');
         newMagazine.classList.add('magazine_10');
         newMagazine.innerHTML = '<img src="magazine10.png" alt="">';
         document.querySelector('.magazine_10_wrapper').appendChild(newMagazine);
         
         magazineCount10++; // увеличиваем счетчик созданных блоков      
   
       } 
     } 
   });
// ... остальной код ...



let houseLevel = 1; // уровень дома

UpHouse.addEventListener('click', function() {
    if (houseLevel <= 10) { // проверяем, что houseLevel меньше 4
        let cost = 15000 * Math.pow(4, houseLevel - 1);
        if(score >= cost) {
            score -= cost;
            money.textContent = Math.floor(score) + '$';
            houseLevel++;

            UpHouse.textContent = 'Upgrade house ' + '15.000$';

            autoClickInterval = setInterval(function() {
                score += update_house;
                money.textContent = Math.floor(score) + '$';
            }, 1000);

            if (houseLevel === 2) {
                update_house = 300;
                btn_click.innerHTML = '<img src="Remove-bg.ai_1708936900997.png" alt="">';
                UpHouse.textContent = 'Upgrade house ' + '60.000$';
            } else if (houseLevel === 3) {
                update_house = 500;
                btn_click.innerHTML = '<img src="Remove-bg.ai_1709023745506.png" alt="">';
                UpHouse.textContent = 'Upgrade house ' + '240.000$';
            } else if (houseLevel === 4) {
                update_house = 1500;
                btn_click.innerHTML = '<img src="magazin4.png" alt="">';
                UpHouse.textContent = 'Upgrade house ' + '960.000$';
            }
            else if (houseLevel === 5) {
                update_house = 3500;
                btn_click.innerHTML = '<img src="magazine5.png" alt="">';
                UpHouse.textContent = 'Upgrade house ' + '3.840.000$';
            }
            else if (houseLevel === 6) {
                update_house = 5500;
                btn_click.innerHTML = '<img src="magazine6.png" alt="">';
                UpHouse.textContent = 'Upgrade house ' + '15.360.000$';
            }
            else if (houseLevel === 7) {
                update_house = 11500;
                btn_click.innerHTML = '<img src="magazine7.png" alt="">';
                UpHouse.textContent = 'Upgrade house ' + '61.440.000$';
            }
            else if (houseLevel === 8) {
                update_house = 75000;
                btn_click.innerHTML = '<img src="magazine8.png" alt="">';
                UpHouse.textContent = 'Upgrade house ' + '245.760.000$';
            }
            else if (houseLevel === 9) {
                update_house = 250500;
                btn_click.innerHTML = '<img src="magazine9.png" alt="">';
                UpHouse.textContent = 'Upgrade house ' + '983.040.000$';
            }
            else if (houseLevel === 10) {
                update_house = 2050500;
                btn_click.innerHTML = '<img src="magazine10.png" alt="">';
                UpHouse.textContent = 'Upgrade house ' + '3.932.160.000$';
            }
            else if (houseLevel === 11) {
                UpHouse.textContent = 'Max';
            }
        } else {
            alert('У вас недостаточно средств');
        }
    } 
});
