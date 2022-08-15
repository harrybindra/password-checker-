var ds = 0;
function gg(ss) {
    ds++;
    for (let index = 0; index < ds; index++) {
        var d1 = /[A-Z]/g;
        var sd1 = d1.test(ss);
        function c_u() {
            if (sd1 == true) {
                var d = document.getElementById("lis").children[1];
                d.style.color = "rgb(0, 204, 0)";
            }
            if (sd1 == false) {
                var d = document.getElementById("lis").children[1];
                d.style.color = "";
            }
        }
        c_u();
        var d2 = /[a-z]/g;
        var sd2 = d2.test(ss);
        function c_l() {
            if (sd2 == true) {
                var d = document.getElementById("lis").children[0];
                d.style.color = "rgb(0, 204, 0)";
            }
            if (sd2 == false) {
                var d = document.getElementById("lis").children[0];
                d.style.color = "";
            }
        }
        c_l();
        var d3 = /[0-9]/g;
        var sd3 = d3.test(ss);
        function c_N() {
            if (sd3 == true) {
                var d = document.getElementById("lis").children[2];
                d.style.color = "rgb(0, 204, 0)";
            }
            if (sd3 == false) {
                var d = document.getElementById("lis").children[2];
                d.style.color = "";
            }
        }
        c_N();
        var sd = ss.length;
        function c_le() {
            if (sd == 8) {
                var d = document.getElementById("lis").children[4];
                d.style.color = "rgb(0, 204, 0)";
            }
            if (sd < 8) {
                var d = document.getElementById("lis").children[4];
                d.style.color = "";
            }
        }
        c_le();
        var d4 = /['!@#$%^&*()_+{}|?><']/g;
        var sd4 = d4.test(ss);
        function c_S() {
            if (sd4 == true) {
                var d = document.getElementById("lis").children[3];
                d.style.color = "rgb(0, 204, 0)";
            }
            if (sd4 == false) {
                var d = document.getElementById("lis").children[3];
                d.style.color = "";
            }
        }
        c_S();

    }
}
var gh = 0;
function btn() {
    gh++;
    if (gh == 1) {
        document.getElementById("inp").type = "text"
        document.getElementById("btn").children[0].innerHTML = "visibility_off";
    }
    if (gh == 2) {
        document.getElementById("inp").type = "password";
        document.getElementById("btn").children[0].innerHTML = "visibility";
        gh = 0;
    }
}
