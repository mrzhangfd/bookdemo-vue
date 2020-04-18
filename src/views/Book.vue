<template>
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>书名</td>
                <td>作者</td>
            </tr>
            <tr v-for="item in books">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.author}}</td>
            </tr>

        </table>

    </div>
</template>

<script>
    export default {
        name: "Book",
        data() {
            return {
                books: [
                    {
                        id: 1,
                        name: "book1",
                        author: "a1"
                    }, {
                        id: 2,
                        name: "book2",
                        author: "a2"
                    }
                ]
            }
        },
        created() {
            const _this=this
            axios.get("http://localhost:8080/test").then(function (resp) {
                _this.books=resp.data
            })
        }
    }
</script>

<style scoped>

</style>
