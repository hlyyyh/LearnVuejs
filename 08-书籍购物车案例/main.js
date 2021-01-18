const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '风',
        date: '2020-01-01',
        price: 100,
        count: 1
      },
      {
        id: 2,
        name: '雅',
        date: '2020-01-02',
        price: 90,
        count: 1
      },
      {
        id: 3,
        name: '颂',
        date: '2020-01-01',
        price: 110,
        count: 1
      }
    ]
  },
  methods: {
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeBook(index){
      this.books.splice(index,1)
    }
  },
  computed: {
    totalPrice() {
      //1、遍历计算
      // let result = 0
      // for (let book of this.books) {
      //   result += book.count * book.price
      // }
      // return result
      //

      //使用高阶函数reduce
      // return this.books.reduce(function (preValue,book){
      //   return preValue + book.price * book.count
      // },0)

      return this.books.reduce((preValue, book) => preValue + book.price * book.count ,0 )
    }
  },
  filters: {
    //过滤器，内部是函数
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})

// 编程范式：声明式编程/命令式编程
// 编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）

//1、需求：取出所有小于100的数字
function lt100() {
  const nums = [10, 20, 122, 1231, 44, 432, 544]
  let newNums = []
  for (let num of nums) {
    if (num < 100) {
      newNums.push(num)
    }
  }
  console.log(newNums)
}

//1、filter的使用
//filter:回调函数有一个要求：必须返回boolean，true加入，false过滤掉，并最终返回一个新数组
function highFunc_filter_lt100() {
  const nums = [10, 20, 122, 1231, 44, 432, 54]
  let newNums = nums.filter(function (num) {
    return num < 100;
  })
  console.log(newNums)
}
highFunc_filter_lt100()
//2、需求：每个元素*2
function lt100m2() {
  const nums = [10, 20, 122, 1231, 44, 432, 54]
  let newNums = []
  for (let num of nums) {
    if (num < 100) {
      newNums.push(num*2)
    }
  }
  console.log(newNums)
}

function highFunc_map_lt100m2() {
  const nums = [10, 20, 122, 1231, 44, 432, 54]
  let newNums = nums
      .filter(function (num) {
        return num < 100;
  })
      .map(function (num) {
    return num * 2;
  })
  console.log(newNums)
}
highFunc_map_lt100m2()

//3、需求：取出所有小于100的数字，求和
function lt100sum() {
  const nums = [10, 20, 122, 1231, 44, 432, 54]
  let sumNum = 0;
  for (let num of nums) {
    if (num < 100) {
      sumNum += num
    }
  }
  console.log(sumNum)
}

//3、reduce
//reduce(参数一，参数二)
function highFunc_reduce_lt100m2() {
  const nums = [10, 20, 122, 1231, 44, 432, 54]
  let newNums = nums
      .filter(function (num) {
        return num < 100;
      })
      .map(function (num) {
        return num * 2;
      }).reduce(function(preValue, n) {
        return preValue + n;
      }, 0)
  console.log(newNums)
}
highFunc_reduce_lt100m2()

//4、汇总
function highFunc_func_lt100m2() {
  const nums = [10, 20, 122, 1231, 44, 432, 54]
  //=>箭头函数，很多function可以写成箭头函数
  let newNums = nums.filter(n => n<100).map( n => n*2).reduce((preValue,n) => preValue + n, 0)
  console.log('=====highFunc_func_lt100m2:'+newNums)
}
highFunc_func_lt100m2()
