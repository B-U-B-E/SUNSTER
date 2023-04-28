let audioIn = new Audio("./audio/bam3.wav");
        let audioOut = new Audio("./audio/outBube.wav")
        let menu = document.querySelector('.menu');
        let contactic = document.querySelector("#contact")
        let openTheButton = document.querySelector(".icon-open")
        let closeTheButton = document.querySelector(".icon-close")

        openTheButton.addEventListener("click", function getclickOpen() {

            document.body.style.overflow = "hidden";
            audioIn.play()

            menu.classList.add('open')
        })
        closeTheButton.addEventListener("click", getclickClose)

        function getclickClose() {
            document.body.style.overflow = "auto";
            audioOut.play()
            menu.classList.remove('open')
            if (menu.classList.remove('open')) {
                closeTheButton.style.display = "none";
            }


        }

        menu.style.boxShadow = " 0 0 20px -10px black";

        console.log(openTheButton);


        let tipStudent = document.getElementById("tip-student");
        let baseStudent = document.querySelector(".base-student");

        tipStudent.addEventListener("click", function bubeClickList() {
            baseStudent.classList.toggle('hide');
            // console.log("i got clicked")
        })


        let studentMarketing = document.getElementById("student-marketing");

        let studentProgramming = document.getElementById("student-programming");
        let studentScience = document.getElementById("student-science");
        let studentDesign = document.getElementById("student-design");


        let arrStudents = [studentMarketing, studentProgramming, studentScience, studentDesign];
        console.log(arrStudents);



        arrStudents.forEach(students => {

            students.addEventListener("click", function () {


                tipStudent.defaultValue = students.firstChild.textContent;
                baseStudent.classList.add("hide");

            })
        })


        // let footer = document.querySelector('footer');
        // document.body.appendChild(footer);

        // function maxHeightFooter(footerHigh) {
        //     if (footer.matches) {
        //         footer.style.width = "100%";
        //         footer.style.position = "absolute";
        //     }
        // }
        // let footerHigh = window.matchMedia('(min-width:768px)');
        // maxHeightFooter(footerHigh);
        // footerHigh.addListener(maxHeightFooter);


        let forms = document.getElementById('formBube');
        forms.addEventListener('submit', function (e) {
            e.preventDefault();


            let name = document.getElementById('nameLastName').value;
            let companyName = document.getElementById('nameCompany').value;
            let email = document.getElementById('contactEmail').value;
            let phone = document.getElementById('phoneNumber').value;
            let tipStudent = document.getElementById('tip-student').value;


            // Do something with the form data
            console.log('Name:', name);
            console.log('Company:', companyName);
            console.log('Email:', email);
            console.log('Phone:', phone);

            // Clear the form fields
            document.querySelector('#nameLastName').value = '';
            document.querySelector('#contactEmail').value = '';
            document.querySelector('#phoneNumber').value = '';
            document.querySelector('#nameCompany').value = '';
        });




        // mala zezancija


        let inputSend = document.querySelector("input[type= submit");
        inputSend.addEventListener('click', function refresh() {
            let name = prompt("Како се викаш?");

            if (!isNaN(name)) {
                alert(`Фала ти чудно име ${name}... имај убав ден...`)
                hakiran();
            }
            if (isNaN(name) && name.match(/^[a-zA-Z\s]*$/)) {
                alert(`Фала ти ${name}...`);
                love();
            }


        });





        function love() {
            let el = document.createElement('div')
            let el2 = document.createElement('h1')
            el2.innerText = `${name} ТИ СИ СРЦЕ`;
            el2.style.color = "white";
            el2.style.textAlign = "center";
            el.setAttribute("style",
                "display:flex; align-items:center; height:100vh; justify-content:center; flex-flow:column"
            )
            document.body.appendChild(el)
            el.append(el2);
            document.body.style.backgroundColor = "black";
            menu.style.display = "none";
            contactic.style.display = "none";
            document.body.style.overflow = "hidden"
            let srce = document.createElement('h1');
            srce.innerText = "❤"
            el.append(srce)
            srce.style.color = "white";
            srce.style.fontSize = "150px";

        }


        function hakiran() {

            let el = document.createElement('div')
            let el2 = document.createElement('h1')
            el2.innerText = `${name} ТИ СИ ХАКИРАН`;
            el2.style.color = "white";
            el2.style.textAlign = "center";
            el.setAttribute("style",
                "display:flex; align-items:center; height:100vh; justify-content:center; flex-flow:column"
            )
            document.body.appendChild(el)
            el.append(el2);
            document.body.style.backgroundColor = "black";
            menu.style.display = "none";
            contactic.style.display = "none";
            document.body.style.overflow = "hidden"
            el.append(closeTheButton)
            closeTheButton.style.color = "white";
            closeTheButton.style.fontSize = "150px";

        }