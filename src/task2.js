function task2 (envelope1, envelope2) {
    if (typeof envelope1 !== 'object' || typeof envelope2 !== 'object') {
        return {status: 'failed', reason: 'Enter two envelopes as objects'};

    } else if (typeof envelope1.a !== 'number' || typeof envelope1.b !== 'number' ) {
        return {status: 'failed', reason: 'Enter two sides of first envelope as properties a and b'};

    } else if (typeof envelope2.c !== 'number' || typeof envelope2.d !== 'number') {
        return {status: 'failed', reason: 'Enter two sides of second envelope as properties c and d'};
        
    } else {
        let result = 0;

        function setMinMaxSides (envelope, side1, side2) {
            if (side1 < side2) {                            // сравнивая стороны одного конверта,
                envelope.minSide = side1;                   // определяем меньшую
                envelope.maxSide = side2;                   // и бОльшую сторону
            } else {
                envelope.minSide = side2;
                envelope.maxSide = side1;
            }
        }

        setMinMaxSides(envelope1, envelope1.a, envelope1.b);
        setMinMaxSides(envelope2, envelope2.c, envelope2.d);

        if (envelope1.minSide < envelope2.minSide && envelope1.maxSide < envelope2.maxSide) {
            result = 1;
        } else if (envelope2.minSide < envelope1.minSide && envelope2.maxSide < envelope1.maxSide) {
            result = 2;
        }
        
       return result;
    }
}
