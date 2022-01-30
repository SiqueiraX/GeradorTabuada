
        var btn = document.getElementById("btn")
        btn.addEventListener("click", tabuada)

        function tabuada() {
            var num = document.getElementById("num")
            var n = Number(num.value)
            var select = document.getElementById("select")

            select.innerHTML = ``

            for (let c = 1; c <= 10; c++) {
                var item = document.createElement(`option`)
                item.text = `${c} * ${n} = ${c * n}`
                item.value = `tab${c}`
                select.appendChild(item)
                //   console.log(`${c} * ${n} = ${c * n}`)
            }
        }
