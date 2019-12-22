exports.install = function (Vue, options) {
    Vue.prototype.getEducation = function (exp) {

        let level = parseInt(exp / 100);

        let education = '';

        if (level >= 0 && level <= 1) {
            education = "学前班";
        } else if (level >= 2 && level <= 3) {
            education = "小班";
        } else if (level >= 4 && level <= 5) {
            education = "大班";
        } else if (level >= 6 && level <= 8) {
            education = "一年级";
        } else if (level >= 9 && level <= 11) {
            education = "二年级";
        } else if (level >= 12 && level <= 14) {
            education = "三年级";
        } else if (level >= 15 && level <= 17) {
            education = "四年级";
        } else if (level >= 18 && level <= 20) {
            education = "五年级";
        } else if (level >= 21 && level <= 23) {
            education = "六年级";
        } else if (level >= 24 && level <= 27) {
            education = "初一";
        } else if (level >= 28 && level <= 31) {
            education = "初二";
        } else if (level >= 32 && level <= 35) {
            education = "初三";
        } else if (level >= 36 && level <= 39) {
            education = "高一";
        } else if (level >= 40 && level <= 43) {
            education = "高二";
        } else if (level >= 44 && level <= 47) {
            education = "高三";
        } else if (level >= 48 && level <= 52) {
            education = "大一";
        } else if (level >= 53 && level <= 57) {
            education = "大二";
        } else if (level >= 58 && level <= 62) {
            education = "大三";
        } else if (level >= 63 && level <= 67) {
            education = "大四";
        } else if (level >= 68 && level <= 73) {
            education = "硕士";
        } else if (level >= 74 && level <= 80) {
            education = "博士";
        } else if (level >= 81 && level <= 88) {
            education = "博士后";
        } else if (level >= 89 && level <= 97) {
            education = "副教授";
        } else if (level >= 98) {
            education = "教授";
        }
        return education;
    }
};