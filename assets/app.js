var app = new Vue({
    el: '#app',
    data: {
        title: "",
        currentSection: "",
        curentSectionIndex: 0,
        sections: [
            { e: "latest", t: "Latest News" },
            { e: "top-stories", t: "Top Stories" },
            { e: "trending-stories", t: "Trending" },
            { e: "just-arrived", t: "Just arrived" }
        ],
        articles: []
    },
    created: function () {
        console.clear();

        var selIndex = -1;

        if (location.hash.substr(1) !== "") {
            var link = location.hash.substr(1);

            for (var i = 0; i < this.sections.length; i++) {
                if (this.sections[i].e === link) {
                    selIndex = i
                    break;
                }
            }
        }

        var selection = Cookies.get('sec');

        if (!isNaN(selection)) selIndex = parseInt(selection);

        if (selIndex < 0 || selIndex >= this.sections.length)
            selIndex = 0;

        this.setSection(selIndex);

        $("#title").on("swipeleft", function () {
            console.log("SSS");
            app.changeSection();
        });

    },
    methods: {

        changeSection: function () {
            this.curentSectionIndex++;
            if (this.curentSectionIndex >= this.sections.length)
                this.curentSectionIndex = 0;

            this.setSection(this.curentSectionIndex);

        },

        setSection: function (idx) {
            this.currentSection = this.sections[idx];
            this.curentSectionIndex = idx;
            this.title = this.currentSection.t;
            document.title = this.title + " - F3News";
            this.load(1);
            Cookies.set('sec', idx);
            location.hash = this.currentSection.e;
        },

        next: function () {
            this.load(this.articles.currentPage + 1);
        },

        load: function (page) {
            var that = this;


            $("#list").hide(0, function () {
                var url = "https://www.f3nws.com/api/" + that.currentSection.e + "?page=" + page;
                $.get(url, function (d) {
                    app.articles = d.result;
                    window.scrollTo(0, 0);
                    console.log(app.articles);

                    $("#list").fadeIn(500);
                });
            });

        },

        getItems: function () {
            if (this.articles instanceof Array)
                return this.articles;

            return this.articles.item;
        },

        relative: function (date) {
            return timeago().format(date);
        }
    }

});