export function clamp(value, minValue, maxValue) {
    return Math.max(minValue, Math.min(value, maxValue));
}

export function getThetaFromCartesian(x, y, z){
    return Math.acos(z);
    /*
    if(z > 0){
        var top = Math.sqrt(x*x + y*y);
        var bottom = z;
        return Math.atan2(top, bottom);
    }
    else if (z < 0){
        var top = Math.sqrt(x*x + y*y);
        var bottom = z;
        return Math.PI + Math.atan2(top, bottom);        
    }
    return Math.PI / 2;//z=0 and sqrt(x^2+y^2) != 0
    //undefined for x=y=z=0 but we simply assume the input to be valid
    */
}

export function getPhiFromCartesian(x, y, z){
    return Math.atan2(y, x);
    /*
    if(x > 0){
        return Math.atan2(y, x);
    }
    else if (x < 0 && y >= 0){
        return Math.atan2(y, x) + Math.PI;
    }
    else if (x < 0 && y < 0){
        return Math.atan2(y, x) - Math.PI;
    }
    else if (x == 0 && y > 0){
        return Math.PI / 2
    }
    else if (x == 0 && y < 0){
        return - Math.PI / 2
    }
    return 0;
    */
}