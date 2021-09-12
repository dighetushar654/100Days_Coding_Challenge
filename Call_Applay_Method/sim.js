var someObject = {
    myProperty : 'Foo',

    myMethod : function(prefix, postfix) {

        console.log(prefix + this.myProperty + postfix);
    }
    };
    someObject.myMethod('<', '>'); // console '<Foo>'
    var someOtherObject  = {

        myProperty : 'Bar.'

    };
    //with call method
    someObject.myMethod.call(someOtherObject, '<', '>'); // console '<Bar>'
    //with apply method
    someObject.myMethod.apply(someOtherObject, ['<', '>']); // console '<Bar>'