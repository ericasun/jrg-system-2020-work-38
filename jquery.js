window.jQuery = function(selectorOrArray){
    let elements
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
        elements = selectorOrArray
    }
    // api可以操作elements
    return {
        oldApi: selectorOrArray.oldApi,
        find(selector){
            let array = []
            for(let i =0; i<elements.length;i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            array.oldApi = this // this就是旧api
            return jQuery(array)
        },
        // 闭包：函数访问外部的变量
        addClass(className){
            for(let i =0; i<elements.length;i++){
                const element = elements[i]
                element.classList.add(className)
            }
            return this
        }
    }
}
