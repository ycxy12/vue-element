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
            let myDiagram = gm(go.Diagram, "myDiagram", { "undoManager.isEnabled": true });// 启用Ctrl-Z撤消，Ctrl-Y重做
            
            let gmModel = gm(go.Model);
            gmModel.nodeDataArray = [
                { key: "Alpha" },
                { key: "Beta" },
                { key: "Gamma" }
            ];
            myDiagram.model = gmModel;

            myDiagram.nodeTemplate = gm(go.Node, "Vertical", // 节点（或任何面板）的第二个参数可以是 Panel 类型
                /* 设置 Node 属性 */
                { // Node.location点将位于每个节点的中心
                    locationSpot: go.Spot.Center
                },

                /* 在此处添加绑定 */
                // example Node binding sets Node.location to the value of Node.data.loc
                new go.Binding("location", "loc"),

                /* add GraphObjects contained within the Node */
                // 此形状将垂直于TextBlock上方
                gm(go.Shape, "RoundedRectangle", // 字符串参数可以命名预定义的图形
                    { /* 设置 Shape 属性 */ },
                    // example Shape binding sets Shape.figure to the value of Node.data.fig
                    new go.Binding("figure", "fig")),

                gm(go.TextBlock, "default text",  // 字符串参数可以是初始文本字符串
                    { /* 设置 TextBlock 属性 */ },
                    // example TextBlock binding sets TextBlock.text to the value of Node.data.text
                    new go.Binding("text"))
            );

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