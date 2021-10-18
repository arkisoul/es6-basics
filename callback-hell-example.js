getDataFromDatabase(id, step2);
function step2(dataFromDatabase) {
    getDataFromWeatherAPI(dataFromDatabase.url, step3);
}
function step3(dataFromWeatherAPI) {
    saveDataToDatabase(dataFromWeatherAPI, step4);
}
function step4(result) {
    function4(param, step5)
}
function step5(res4) {
    function5(res4, step6)
}
function step6(res5) {
    console.log(res5)
}

function one() {
  setTimeout(function() {
    console.log('1. First thing setting up second thing');
    setTimeout(function() {
      console.log('2. Second thing setting up third thing');
      setTimeout(function() {
        console.log('3. Third thing setting up fourth thing');
        setTimeout(function() {
          console.log('4. Fourth thing');
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
};

function compute_first_parameter(cb) { cb(42); } 
function compute_second_parameter(cb) { cb(10); }
function compute_sum(a, b, cb) { cb(a + b); }

function compute_a_result() {
    compute_first_parameter(function (x) {
        compute_second_parameter(function (y) {
            compute_sum(x, y, function(result) {
                console.log(result);  // 52
            });
        });
    });
}

fs.readFile('config.json',
    function (error, text) {
        if (error) {
            console.error('Error while reading config file');
        } else {
            try {
                const obj = JSON.parse(text);
                console.log(JSON.stringify(obj, null, 4));
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });

readFilePromisified('config.json')
.then(function (text) { // (A)
    const obj = JSON.parse(text);
    console.log(JSON.stringify(obj, null, 4));
})
.catch(function (error) { // (B)
    // File read error or JSON SyntaxError
    console.error('An error occurred', error);
});
