define(['model/base'], function (BaseModel) {
    return {
        setTitle: function (title) {
            BaseModel.setTitle(title);
        },
        getTitle: function () {
            return BaseModel.title;
        }
    }
});