<template>
    <div id="demo"></div>
</template>

<script>
export default {
    data() {
        return {
            dataList: {
                "nodes": [
                    {
                        "loaded": true,
                        "id": "m-1",
                        "name": "Joe"
                    },
                    {
                        "id": "f-1",
                        "name": "Anna"
                    },
                    {
                        "id": "f-2",
                        "name": "Wendy"
                    },
                    {
                        "id": "f-3",
                        "name": "Dina"
                    },
                    {
                        "id": "f-4",
                        "name": "Cate"
                    },
                    {
                        "id": "f-5",
                        "name": "Elisa"
                    },
                    {
                        "id": "f-6",
                        "name": "Suzie"
                    }
                ],
                "links": [
                    {
                        "to": "f-1",
                        "from": "m-1",
                        "id": "l01",
                        "type": "friend"
                    },
                    {
                        "to": "f-2",
                        "from": "m-1",
                        "id": "l02",
                        "type": "friend"
                    },
                    {
                        "to": "f-3",
                        "from": "m-1",
                        "id": "l03",
                        "type": "friend"
                    },
                    {
                        "to": "f-4",
                        "from": "m-1",
                        "id": "l04",
                        "type": "friend"
                    },
                    {
                        "to": "f-5",
                        "from": "m-1",
                        "id": "l05",
                        "type": "friend"
                    },
                    {
                        "to": "f-6",
                        "from": "m-1",
                        "id": "l06",
                        "type": "friend"
                    }
                ]
            }
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            let that = this
            let chart = new NetChart({
                container: document.getElementById("demo"),
                data: {
                    dataFunction: function (nodeList, success, error) {
                        console.log(nodeList)
                        success(that.dataList);
                    }
                },
                navigation: {
                    initialNodes: ["m-1"],
                    mode: "manual"
                },
                style: {
                    node: {
                        fillColor: "rgba(47,195,47,1)"
                    },
                    link: {
                        fillColor: "rgba(176,220,11,0.6)"
                    }
                }

            });
        }
    }
}
</script>

<style>
#demo {
    width: 100%;
    height: 100%;
}
</style>