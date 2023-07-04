// kiểm tra kiểu dữ liệu đầu vào có phải là Number hay không
function isNumber(){
    // ở đây em không để tham số đầu vào, mà xem lấy đối tượng Argument để lấy tham số đầu vào
    // tại nếu em đặt vào tham số đầu vào là n thôi, trong trường hợp cần kiểm tra nhiều số 1 lúc, thì hàm này sẽ không chạy, nên em lấy argument
    let resultArr = [] // result này em đặt default value là array để chứa kết quả của các tham số đầu vào

    // loop qua các tham số trong argument
    for(let i = 0; i < arguments.length; i++){ 
        // nếu argument[i] là 1 số và type của argument[i] phải là number, đồng thời nó phải là 1 số nguyên, thì resultArr sẽ push True vào, ngược lại thì false
        if(!isNaN(arguments[i]) && typeof arguments[i] == "number" && Number.isInteger(arguments[i])){
            resultArr.push(true)
        }
        else{   
            resultArr.push(false)
        }
    }

    // nếu trong resultArr có tồn tại 1 kết quả là false, thì hàm sẽ trả về false, nếu không sẽ trả về true
    return resultArr.includes(false) ? false : true
}

// hàm này dùng để lấy các ước của n, với n là tham số
function getDivisors(n){

    // kiểm tra n có phải là 1 số hay không, nếu ko phải thì return luôn
    if(!isNumber(n)){
        return "your number is not valid"
    }

    let result = [] // đây là mảng sẽ được trả về sau cùng, trong đó chưa các ước của số được đặt làm tham số
    for(let i = 1; i <= n/2; i++){
        if(n % i === 0){ //nếu n chia hết cho i thì sẽ push i vào result
            result.push(i)
        }
    }
    return result
}


// kiểm tra tham số đầu vào có phải số nguyên tố không
function check_prime_number(n){
    
    if(!isNumber(n)){
        return "your number is not valid"
    }

    let divisorArr = []
    if(n < 2){
        return false
    }
    for(let i = 2; i <= n/2; i++){
        if(n % i === 0){
            divisorArr.push(i)
        }
    }
    return divisorArr.length === 0 ? true : false
}


// số thân thiết
function check_2_so_than_thiet(n1, n2){
    // kiểm tra kiểu dữ liệu của n1, n2 có phải là number hay không, nếu không return luôn
    if(!isNumber(n1, n2)){
        return "your input is not valid, it must be a number"
    }

    let totalDivisorN1 = getDivisors(n1).reduce((total, divisor) => total + divisor, 0) // lấy ra array chứa các ước của số n1, và tỉnh tổng các ước của n1
    let totalDivisorN2 = getDivisors(n2).reduce((total, divisor) => total + divisor, 0)
    
    // nếu tổng ước của n1 = với n2 và tổng ước của n2 = n1 thì trả về true, ngược lại là false
    return totalDivisorN1 === n2 && totalDivisorN2 === n1 ? true : false
}


// số hứa hôn
function check_2_so_hua_hon(n1, n2){
    // kiểm tra kiểu dữ liệu của n1, n2 có phải là number và có phải là số dương hay không
    if(!isNumber(n1, n2)){
        return "your input is not valid, it must be a integer"
    }
    else if(n1 < 0 || n2 < 0){
        return "it must be positve integer"
    }

    // lấy ra array chứa các ước của số n1, và tỉnh tổng các ước của n1
    let totalDivisorN1 = getDivisors(n1).reduce((total, divisor) => total + divisor, 0)
    let totalDivisorN2 = getDivisors(n2).reduce((total, divisor) => total + divisor, 0)

    // trả về true nếu cả totalDivisorN1 và totalDivisorN2 trừ cho n1 và n1 bằng 1, và nếu không sẽ trả về false
    return totalDivisorN2 - n1 === 1 && totalDivisorN1 - n2 === 1 ? true : false
}

// Emirp
function emirp_Check(n){
    let result // đặt result là biến chứa kết quả sẽ được trả về sau cùng

    // kiểm tra tham số đầu vào có phải là số và có phải là số nguyên tố hay không, nếu không thì return
    if(!isNumber(n) || !check_prime_number(n)){
        return false
    }
    else{
        // convert kiểu dữ liệu của n thành String, sau đó split, và reverse
        let splitN = String(n).split("").reverse()
        // nối mảng vừa được split
        let reverseN = Number(splitN.join(""))

        //nếu mảng vừa được nối bằng n tham số đầu vào thì result sẽ bằng false, ngược lại thì sẽ đem đi kiểm tra coi có phải là số nguyên tố không, nếu là số nguyên tố, thì result sẽ bằng true, không thì là false
        result = reverseN === n ? false : (
            check_prime_number(reverseN) === true ? true : false
        )
    }
    // trả về kết quả sau cùng
    return result
}


// số hoàn hảo
function so_hoan_hao(n){
    // kiểm tra n đầu vào có phải là số hay không, và có lớn hơn 0 hay không, nếu không thì return
    if(!isNumber(n) || n < 0){
        return false
    }

    // lấy ước của n tham số đầu vào, và tỉnh tổng ước của n
    let totalDivisorN = getDivisors(n).reduce((total, ele) => total + ele, 0)

    // nếu tổng ước của n bằng với n, thì return true, không thì false
    return totalDivisorN === n ? true : false
}

// số tự mãn
function so_tu_man(n){
    // kiểm tra n tham số đầu vào có phải là số hay không
    if(!isNumber(n)){
        return false
    }

    // convert kiểu dữ liệu của n thành String, và split
    let splitN = String(n).split("")

    // convert kiểu dữ liệu của các phần tử trong mảng vừa split thành Number
    splitN = splitN.map(number => Number(number))

    let total = 0 // đặt biến total đế chứa tổng mũ 3 của phần tử trong mảng

    //loop qua mảng để mũ 3 các phần tử trong mảng, và cộng dồn vào trong biến total
    for(let i = 0; i < splitN.length; i++){
        total += Math.pow(splitN[i], 3)
    }

    // nếu total bằng với n, thì return true, không thì false
    return total === n ? true : false
}


// số mạnh mẽ
function so_manh_me(n){
    // kiểm tra tham số đầu vào có phải là 1 số hay không
    if(!isNumber(n)){
        return false
    }

    // đặt biến chứa để chứa các số nguyên tố trong khoảng từ 0 tới n
    let primeArr = []

    // push vào primeArr các số nguyên tố trong khoảng từ 0 tới n
    for(let i = 0; i < n; i++){
        if(check_prime_number(i)){
            primeArr.push(i)
        }
    }

    // loop qua các số nguyên tố có trong mảng vừa tìm được
    for(let i = 0; i < primeArr.length; i++){
        // nếu n vừa chia hết cho primeArr[i] và vừa chia hết cho bình phương của primeArr[i], thì return true
        if(n % primeArr[i] === 0 && n % Math.pow(primeArr[i], 2) === 0){
            return true
        }
    }

    // sau khi loop qua, mà vẫn không thể retrun true, thì sẽ return false
    return false;
}


// số bán hoàn hảo
/*
    hàm này em viết để tìm và cộng các ước, sao cho bằng số n, em viết hàm này cho hàm kiểm tra số bán hoàn hảo, 
    mà trong bán hoàn hảo, em đã có hàm kiểm tra tham số đầu vào, nên trong hàm sum này em không viết kiểm tra dữ liệu đầu vào để làm gì
*/

function sum(arr = [], n){
    // vòng i này em chạy để lấy trước 1 phần tử trong arr tham số đầu vào
    for(let i = 0; i < arr.length; i++){
        // vòng j này em lấy phần tử liền kề của i trong arr
        for(let j = i + 1; j < arr.length; j++){
            // nếu arr[i] + arr[j] bằng với n, thì em sẽ trả về 1 mảng gồm 2 số đó, nếu không thì em sẽ chạy vòng k
            if((arr[i] + arr[j]) === n){
                return [arr[i], arr[j]]
            }else{
                // vòng k này sẽ lấy phần từ liền kề của j, nếu arr[i] + arr[j] + arr[k] bằng với n, thì sẽ trả về 1 mảng gồm 3 số đó
                for(let k = j + 1; k < arr.length; k++){
                    if((arr[i] + arr[j] + arr[k]) === n){
                        return [arr[i], arr[j], arr[k]]
                    }
                }
            }
        }
    }
    // nếu không tìm được bất kì cặp số nào cộng lại bằng với n, thì em sẽ return 1 mảng rổng
	return []
}

/*
    perfect_r_not_check sẽ là hàm kiểm tra số bán hoàn hảo

    ý tưởng: về ý tưởng của bài này, thì sau khi ngồi log ra hết mảng chứa các ước của các số bán hoàn hảo 6 , 12 , 18 , 20 , 24 , 28 , 30 , 36 , 40
             thì em nhận thấy, kiểu gì thì kiểu cũng sẽ phải cộng ước lớn nhất và ước lớn nhì của số đó, tức là 2 phần tử cuối của mảng chứa ước của n,
             nhưng vẫn sẽ có trường hợp, ta phải cộng tổng các ước như là số 6 và 28, nên chia 2 ra case trước, 1 là cộng tổng các ước, 2 là sẽ cộng 2 phần tử cuối mảng ước
*/

function perfect_r_not_check(n){
    // kiểm tra kiểu dữ liệu của n đầu vào
    if(!isNumber(n)){
        return "your input is not valid"
    }

    // lấy ra mảng gồm các ước của n
    let divisor = getDivisors(n)

    // đặt biến total đế chứa tổng các ước đã cộng sao cho bằng n
    let total = 0

    // trường hợp 1: nếu tổng các ước của n bằng với n, thì return true luôn
	if(divisor.reduce((total, ele) => total + ele, 0) === n){
        console.log(1);
		return true
	}
    // trường hợp 2: khi tổng các ước có thể là bé hoặc nhỏ hơn n
    else{

        // cộng 2 ước cuối cùng của mảng ước
        total = divisor[divisor.length - 1] + divisor[divisor.length - 2]
	
        // loại bỏ 2 phần tử ta vừa cộng ở trong mảng ước
		let divisorLeft = divisor.slice(0, divisor.length - 2)
	
        // tính ra số còn thiếu bằng cách lấy n - total
		let needMore = n - total
	
        // tìm trong mảng xem có phần tử vào bằng với needMore không, nếu có thì cộng vào
		if(divisorLeft.includes(needMore)){
			total += divisorLeft.find(ele => ele === needMore)
	
		}
        // nếu không thì sẽ cộng phần tử cuối cùng của mảng ước tiếp
        else{
			total += divisorLeft[divisorLeft.length - 1]

            // lại lấy n - total để coi còn thiếu bao nhiêu
			let needMore = n - total
	
            // loại bỏ phàn tử vừa cộng có trong mảng
			divisorLeft = divisorLeft.slice(0, divisorLeft.length - 1)
	
            // kiểm tra nếu trong mảng có phần tử bằng với needMore, nếu có thì cộng vào
			if(divisorLeft.includes(needMore)){
				total += divisorLeft.find(ele => ele === needMore)
			}
            // nếu không thì sử dụng hàm sum đã viết từ trước
			else{
                // em chưa nghĩ ra tên cho biến chứa mảng gồm các số cộng lại bằng needmore có trong divisorLeft, nên đặt tạm là arr
				let arr = sum(divisorLeft, needMore)
                // nếu arr.length khác 0, nghĩa là arr không rỗng, nếu không rỗng, thì ta sẽ bắt đầu vòng lặp, lặp qua các phần tử có trong arr
				if(arr.length !== 0){
					for(let i = 0; i < arr.length; i++){
                        // hàm find sẽ tìm ra phần tử có trong divisorLeft bằng với arr[i], và total sẽ cộng phần tử bằng với arr[i] có trong divisorLeft
						total += divisorLeft.find(n => n === arr[i])
					}
				}
			}
		}
	}
    // trả về true, nếu total bằng với n, không thì sẽ trả false
	return total === n ? true : false
}