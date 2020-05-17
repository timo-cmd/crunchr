import { Class } from '../../ast/class'
import { Formal } from '../../ast/formal'
import { Function } from '../../ast/func'
import { NativeExpression } from '../../ast/nativeexpression'
import { Obj } from '../../interpreter/object'
import { Types } from '../../types/types'

export class IntClass extends Class {

    constructor() {
        super();

        this.name = Types.Int;

        this.superClass = Types.Object;

        this.properties.push(new Formal('value', 'int'));

        this.functions.push(new Function('toString', [], Types.String,
            new NativeExpression((context) => {
                let result = Obj.create(context, Types.String);

                result.set('value', context.self.get('value').toString());

                return result;
            }), true));

        this.functions.push(new Function('==', [new Formal('rhs', Types.Object)], Types.Bool,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let value = Obj.create(context, Types.Bool);

                if (rhs.type !== Types.Int && rhs.type !== Types.Double) {
                    value.set('value', false);
                } else {
                    value.set('value', lhs.get('value') === rhs.get('value'));
                }

                return value;
            }), true));

        this.functions.push(new Function('unary_-', [], Types.Int,
            new NativeExpression((context) => {
                let result = Obj.create(context, Types.Int);

                result.set('value', -context.self.get('value'));

                return result;
            })));

        this.functions.push(new Function('+', [new Formal('rhs', Types.Int)], Types.Int,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Int);
                result.set('value', lhs.get('value') + rhs.get('value'));

                return result;
            })));

        this.functions.push(new Function('+', [new Formal('rhs', Types.Double)], Types.Double,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Double);
                result.set('value', lhs.get('value') + rhs.get('value'));

                return result;
            })));


        this.functions.push(new Function('-', [new Formal('rhs', Types.Int)], Types.Int,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Int);
                result.set('value', lhs.get('value') - rhs.get('value'));

                return result;
            })));

        this.functions.push(new Function('-', [new Formal('rhs', Types.Double)], Types.Double,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Double);
                result.set('value', lhs.get('value') - rhs.get('value'));

                return result;
            })));

        this.functions.push(new Function('*', [new Formal('rhs', Types.Int)], Types.Int,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Int);
                result.set('value', lhs.get('value') * rhs.get('value'));

                return result;
            })));

        this.functions.push(new Function('*', [new Formal('rhs', Types.Double)], Types.Double,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Double);
                result.set('value', lhs.get('value') * rhs.get('value'));

                return result;
            })));

        this.functions.push(new Function('/', [new Formal('rhs', Types.Int)], Types.Int,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Int);
                result.set('value', Math.round(lhs.get('value') / rhs.get('value')));

                return result;
            })));

        this.functions.push(new Function('/', [new Formal('rhs', Types.Double)], Types.Double,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Double);
                result.set('value', lhs.get('value') / rhs.get('value'));

                return result;
            })));

        this.functions.push(new Function('%', [new Formal('rhs', Types.Int)], Types.Int,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Int);
                result.set('value', lhs.get('value') % rhs.get('value'));

                return result;
            })));

        this.functions.push(new Function('>', [new Formal('rhs', Types.Int)], Types.Bool,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Bool);
                result.set('value', lhs.get('value') > rhs.get('value'));

                return result;
            })));

        this.functions.push(new Function('>', [new Formal('rhs', Types.Double)], Types.Bool,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Bool);
                result.set('value', lhs.get('value') > rhs.get('value'));

                return result;
            })));

        this.functions.push(new Function('>=', [new Formal('rhs', Types.Int)], Types.Bool,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Bool);
                result.set('value', lhs.get('value') >= rhs.get('value'));

                return result;
            })));

        this.functions.push(new Function('>=', [new Formal('rhs', Types.Double)], Types.Bool,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Bool);
                result.set('value', lhs.get('value') >= rhs.get('value'));

                return result;
            })));

        this.functions.push(new Function('<', [new Formal('rhs', Types.Int)], Types.Bool,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Bool);
                result.set('value', lhs.get('value') < rhs.get('value'));

                return result;
            })));

        this.functions.push(new Function('<', [new Formal('rhs', Types.Double)], Types.Bool,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Bool);
                result.set('value', lhs.get('value') < rhs.get('value'));

                return result;
            })));

        this.functions.push(new Function('<=', [new Formal('rhs', Types.Int)], Types.Bool,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Bool);
                result.set('value', lhs.get('value') <= rhs.get('value'));

                return result;
            })));

        this.functions.push(new Function('<=', [new Formal('rhs', Types.Double)], Types.Bool,
            new NativeExpression((context) => {
                let rhs = context.store.get(context.environment.find('rhs'));
                let lhs = context.self;

                let result = Obj.create(context, Types.Bool);
                result.set('value', lhs.get('value') <= rhs.get('value'));

                return result;
            })));
    }
}