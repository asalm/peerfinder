var Router_func = function(cfg) {

    var post_func = async function (url, usr_tkn, data) {

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': (usr_tkn !== "") ? 'Bearer ' + usr_tkn : ""
            }
        });
        const json = await response.json(); //extract JSON from the http response
        return json
    };

    var that = this;

    this.db = new Object();


    this.setup = async function(){

        var url = cfg.host + '/ldap/verify';
        var elem = await post_func(url, cfg.user_token,  {"token": cfg.user_token} )
        that.usr = elem.message;

        // var url = cfg.host + '/sql/'+cfg.app_token+'/_schema/select';
        var _url = cfg.host + '/sql/'+cfg.app_token+'/';
        var _elem = await post_func(_url, cfg.user_token,  {"data": {}});
        //console.log(_elem);
        _elem.data.forEach(function(elem){

            that.db[elem.table_name] = new objRouter(cfg,elem);

        });

    };



    function objRouter(cfg, table){

        // this.host = cfg.host;
        // this.token = cfg.user_token;

        this.get = async function (data, app_tkn) {

            var url = cfg.host + "/sql/" + app_tkn + "/"+ table.table_name + "/select";
            var body = {data: data};
            return post_func(url, cfg.user_token, body);

        };

        this.insert = async function (data, app_tkn){

            var url = cfg.host + "/sql/" + app_tkn + "/"+ table.table_name + "/insert";
            var body = {data: data};
            return post_func(url, cfg.user_token, body);

        };

        this.update = async function (data, app_tkn){

            var url = cfg.host + "/sql/" + app_tkn + "/"+ table.table_name + "/update";
            var body = {data: data};
            return post_func(url, cfg.user_token, body);


        };
        this.delete = async function(data, app_tkn){

            console.log(data);

            var url = cfg.host + "/sql/" + app_tkn + "/"+ table.table_name + "/delete";
            var body = {data: data};
            return post_func(url, cfg.user_token, body);

        };

        this.upload = async function(path, file, app_tkn){

            var url = cfg.host + "/fs/" + app_tkn + "/" + path;


            var form = new FormData();
            form.append("upload", file);

            const response = await fetch(url, {
                method: 'POST',
                body: form,
                headers:{
                    'Authorization': (cfg.user_token !== "") ?  'Bearer '+ cfg.user_token : ""
                }
            });
            const json = await response.json(); //extract JSON from the http response

            return json;


        };

    }



}

export default Router_func;