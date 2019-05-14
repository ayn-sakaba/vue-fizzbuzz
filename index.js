'use strict';

const paginate = [-1];    // ページネーションOFF

const headers = [
    {
        text: 'base',
        value: 'base'
    },
    {
        text: '2乗',
        value: 'square'
    },
    {
        text: '+100',
        value: 'add100'
    },
    {
        text: '+200',
        value: 'add200'
    },
];

const numbers = [1, 2];   // 初期データナンバー
let data = [];

window.onload = function() {
    const fizzbuzz = new Vue({
        el: '#fizzbuzz',
        data: {
            headers: headers,
            data: data,
            number: ''
        },
        computed: {
            rowCount: function() {
                return this.data.length;
            }
        },
        methods: {
            addData: function(event) {
                addData(this.number);
                this.number = '';
            },
            mouseover: function(event) {
                event.target.parentNode.classList.add('hover');
            },
            mouseleave: function(event) {
                event.target.parentNode.classList.remove('hover');
            }
        }
    });

    initData();
}

// 初期データ作成
function initData() {
    numbers.forEach(number => addData(number));
}

// データ追加
function addData(number) {
    let tableData = {
        base: number,
        square: number ** 2,
        add100: number + 100,
        add200: number + 200
    };

    Object.keys(tableData).forEach(function(key) {
        tableData[key] = checkFizzBuzz(tableData[key]);
    });

    let addData = {
        tableData: tableData,
        class: {
            'pink lighten-4': number > 2 ? true : false
        }
    }

    data.push(addData);
}

// FizzBuzz確認・付与
function checkFizzBuzz(number) {
    let result = number;
    if (number % 3 == 0) result += ' Fizz';
    if (number % 5 == 0) result += ' Buzz';

    return result;
}
