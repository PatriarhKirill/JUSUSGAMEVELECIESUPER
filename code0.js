gdjs._49STUPENCode = {};


gdjs._49STUPENCode.GDBOGENKAObjects1= [];
gdjs._49STUPENCode.GDBOGENKAObjects2= [];
gdjs._49STUPENCode.GDBLOCHEKObjects1= [];
gdjs._49STUPENCode.GDBLOCHEKObjects2= [];

gdjs._49STUPENCode.conditionTrue_0 = {val:false};
gdjs._49STUPENCode.condition0IsTrue_0 = {val:false};
gdjs._49STUPENCode.condition1IsTrue_0 = {val:false};

gdjs._49STUPENCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs._49STUPENCode.GDBOGENKAObjects1.length = 0;
gdjs._49STUPENCode.GDBOGENKAObjects2.length = 0;
gdjs._49STUPENCode.GDBLOCHEKObjects1.length = 0;
gdjs._49STUPENCode.GDBLOCHEKObjects2.length = 0;


{

gdjs._49STUPENCode.GDBOGENKAObjects1.createFrom(runtimeScene.getObjects("BOGENKA"));

gdjs._49STUPENCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49STUPENCode.GDBOGENKAObjects1.length;i<l;++i) {
    if ( gdjs._49STUPENCode.GDBOGENKAObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs._49STUPENCode.condition0IsTrue_0.val = true;
        gdjs._49STUPENCode.GDBOGENKAObjects1[k] = gdjs._49STUPENCode.GDBOGENKAObjects1[i];
        ++k;
    }
}
gdjs._49STUPENCode.GDBOGENKAObjects1.length = k;}if (gdjs._49STUPENCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs._49STUPENCode.GDBOGENKAObjects1.length ;i < len;++i) {
    gdjs._49STUPENCode.GDBOGENKAObjects1[i].setAnimation(1);
}
}}

}


{

gdjs._49STUPENCode.GDBOGENKAObjects1.createFrom(runtimeScene.getObjects("BOGENKA"));

gdjs._49STUPENCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49STUPENCode.GDBOGENKAObjects1.length;i<l;++i) {
    if ( gdjs._49STUPENCode.GDBOGENKAObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs._49STUPENCode.condition0IsTrue_0.val = true;
        gdjs._49STUPENCode.GDBOGENKAObjects1[k] = gdjs._49STUPENCode.GDBOGENKAObjects1[i];
        ++k;
    }
}
gdjs._49STUPENCode.GDBOGENKAObjects1.length = k;}if (gdjs._49STUPENCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs._49STUPENCode.GDBOGENKAObjects1.length ;i < len;++i) {
    gdjs._49STUPENCode.GDBOGENKAObjects1[i].setAnimation(1);
}
}}

}


{

gdjs._49STUPENCode.GDBOGENKAObjects1.createFrom(runtimeScene.getObjects("BOGENKA"));

gdjs._49STUPENCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49STUPENCode.GDBOGENKAObjects1.length;i<l;++i) {
    if ( gdjs._49STUPENCode.GDBOGENKAObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs._49STUPENCode.condition0IsTrue_0.val = true;
        gdjs._49STUPENCode.GDBOGENKAObjects1[k] = gdjs._49STUPENCode.GDBOGENKAObjects1[i];
        ++k;
    }
}
gdjs._49STUPENCode.GDBOGENKAObjects1.length = k;}if (gdjs._49STUPENCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs._49STUPENCode.GDBOGENKAObjects2.createFrom(gdjs._49STUPENCode.GDBOGENKAObjects1);

gdjs._49STUPENCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49STUPENCode.GDBOGENKAObjects2.length;i<l;++i) {
    if ( gdjs._49STUPENCode.GDBOGENKAObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs._49STUPENCode.condition0IsTrue_0.val = true;
        gdjs._49STUPENCode.GDBOGENKAObjects2[k] = gdjs._49STUPENCode.GDBOGENKAObjects2[i];
        ++k;
    }
}
gdjs._49STUPENCode.GDBOGENKAObjects2.length = k;}if (gdjs._49STUPENCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs._49STUPENCode.GDBOGENKAObjects2.length ;i < len;++i) {
    gdjs._49STUPENCode.GDBOGENKAObjects2[i].setAnimation(2);
}
}}

}


{

gdjs._49STUPENCode.GDBOGENKAObjects2.createFrom(gdjs._49STUPENCode.GDBOGENKAObjects1);

gdjs._49STUPENCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49STUPENCode.GDBOGENKAObjects2.length;i<l;++i) {
    if ( !(gdjs._49STUPENCode.GDBOGENKAObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs._49STUPENCode.condition0IsTrue_0.val = true;
        gdjs._49STUPENCode.GDBOGENKAObjects2[k] = gdjs._49STUPENCode.GDBOGENKAObjects2[i];
        ++k;
    }
}
gdjs._49STUPENCode.GDBOGENKAObjects2.length = k;}if (gdjs._49STUPENCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs._49STUPENCode.GDBOGENKAObjects2.length ;i < len;++i) {
    gdjs._49STUPENCode.GDBOGENKAObjects2[i].setAnimation(2);
}
}}

}

} //End of subevents
}

}

return;
}
gdjs['_49STUPENCode']= gdjs._49STUPENCode;
