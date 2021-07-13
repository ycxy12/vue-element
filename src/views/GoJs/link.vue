<template>
    <div>
        <div id="myDiagram" class="myDiagram"></div>
    </div>
</template>

<script>
import go from 'gojs'
export default {
    mounted() {
        this.initCharts()
    },
    methods: {
        initCharts() {
            let gm = go.GraphObject.make
            let myDiagram = gm(go.Diagram, "myDiagram",
                {
                    "undoManager.isEnabled": true, // 启用Ctrl-Z撤消，Ctrl-Y重做
                    layout: gm(go.TreeLayout,
                        { angle: 90, layerSpacing: 35 })
                });

            myDiagram.nodeTemplate = gm(go.Node, "Horizontal",
                /* 设置 Node 属性 */
                { background: "#44CCFF" },

                gm(go.Picture,
                    { margin: 10, width: 50, height: 50, background: "red" },
                    new go.Binding("source")),
                gm(go.TextBlock, "Default Text",
                    { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
                    new go.Binding("text", "name")));


            myDiagram.linkTemplate = gm(go.Link,  //修改连接线的样式
                { routing: go.Link.Orthogonal, corner: 5 },
                gm(go.Shape, { strokeWidth: 3, stroke: "#555" }));// the link's path shape


            let tModel = gm(go.TreeModel);
            tModel.nodeDataArray = [
                { key: "1", name: "Don Meow", source: "cat1.png" },
                { key: "2", parent: "1", name: "Demeter", source: "cat2.png" },
                { key: "3", parent: "1", name: "Copricat", source: "cat3.png" },
                { key: "4", parent: "3", name: "Jellylorum", source: "cat4.png" },
                { key: "5", parent: "3", name: "Alonzo", source: "cat5.png" },
                { key: "6", parent: "2", name: "Munkustrap", source: "cat6.png" }
            ];
            myDiagram.model = tModel;

        }
    }
}
</script>

<style>
.myDiagram {
    width: 100%;
    height: 80vh;
    background-color: #dae4e4;
}
</style>