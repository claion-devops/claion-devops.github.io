var url_login = pm.environment.get("base_dev_login_url");
var userid = pm.environment.get("base_dev_userid");
var userpw = pm.environment.get("base_dev_userpw");
pm.sendRequest({
    url: 'http://olly-dev-api.claion.io/login',
    method: "POST",
    header: {
        "content-type": "application/json",
    },
    body: {
        mode: 'raw',
        raw: JSON.stringify({'userId': userid, 'password': userpw})
    }
}, function (err, res) {
    pm.environment.set("X-AUTHORIZATION", "Bearer " + res.json().token);
});