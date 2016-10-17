# LeetCode
记录一下自己的LeetCode

第一刷全部用JavaScript完成，从易到难慢慢来，写的不好，欢迎issue或PR~

## 关于 JavaScript 的内存管理

底层语言（比如C）有一些内存管理方法，比如`malloc()`和`free`。而 JavaScript 内存在对象或者基本类型在创建时“自动”生成，也会在不再使用时“自动”释放。后一个过程叫做“垃圾回收”。

这一“自动”过程给了一些JavaScript程序员错误的观念，即自己不用关心内存管理实务。这是错误的。

### 内存生命周期

不论哪种编程语言，内存的生命周期都是类似的：

1. 生成你需要的内存
2. 使用生成的内存（读、写）
3. 如果不再需要了，释放内存

第一个和第二个过程是在编程语言中显示声明的，最后一个部分在底层语言中是显示的，而在高级编程语言中是隐式的。

对于第一个和第二个过程比较容易理解，不再赘述。至于如何判断内存已经不再需要，在JavaScript中使用了“垃圾回收”机制。

### 垃圾回收

垃圾回收需要判断内存“是否还需要”，如何实现这一点，最主要机制就是对引用的计数。

在我们讨论内存管理的时候，一个对象“引用”另一个对象是指前者访问后者（无论是显式还是隐式）。比如，一个JavaScript对象就拥有对它的原型（prototype）的“引用”，这是隐式引用。它还拥有对它的属性的引用，这是显式引用。

在这个语境之中，“对象”也被扩充为更广的范围比如函数作用域。

基于“引用”来做垃圾回收，传统浏览器使用“引用计数”的方式，而现代浏览器更多采用“标记&移除”方式。简单来说就是不再被任何对象引用的对象就会被回收 。

## 关于 array 的性能优化Tips

V8 Array is Fast, VERY FAST
Array push / pop / shift is ~approx 20x+ faster than any object equivalent.
Surprisingly Array.shift() is fast ~approx 6x slower than an array pop, but is ~approx 100x faster than an object attribute deletion.
Amusingly, Array.push( data ); is faster than Array[nextIndex] = data by almost 20 (dynamic array) to 10 (fixed array) times over.
Array.unshift(data) is slower as expected, and is ~approx 5x slower than a new property adding.
Nulling the value array[index] = null is faster than deleting it delete array[index] (undefined) in an array by ~approx 4x++ faster.
Surprisingly Nulling a value in an object is obj[attr] = null ~approx 2x slower than just deleting the attribute delete obj[attr]
Unsurprisingly, mid array Array.splice(index,0,data) is slow, very slow.
Surprisingly, Array.splice(index,1,data) has been optimized (no length change) and is 100x faster than just splice Array.splice(index,0,data)
unsurprisingly, the divLinkedList is inferior to an array on all sectors, except dll.splice(index,1) removal (Where it broke the test system).
BIGGEST SURPRISE of it all [as jjrv pointed out], V8 array writes are slightly faster than V8 reads =O

