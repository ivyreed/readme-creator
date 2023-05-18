module.exports = function (license) {
    if (license === 'Apache 2.0 License') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    else if (license === 'Boost Software License 1.0') {
        return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    }
    else if (license === 'CC0'){

        return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
    }
    else if (license === 'Eclipse Public License 1.0'){
        return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    }
    else { return 'N/A' }
}