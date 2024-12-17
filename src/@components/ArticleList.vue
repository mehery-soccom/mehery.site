<script>
export default {
    props: {
        contentType: { type: String, required: true },
        query: { type: Object, required: false }
    },
    render() {
        return this.$scopedSlots.default?.({
            loading: this.loading,
            results: this._results
        });
    },
    mounted() {
        this.init();
    },
    data() {
        return {
            loading: false,
            results: null
        };
    },
    computed: {
        _results() {
            return this.results;
        }
    },
    methods: {
        async init() {
            if (!this.contentType) return;

            try {
                this.loading = true;

                let resp = await this.$dataService.searchResourceByType({
                    contentType: this.contentType,
                    query: this.query || this.$route.query
                });
                console.log("ArticleList", { contentType: this.contentType, resp });

                this.results = resp;
            } catch (error) {
                console.error(error);
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>
