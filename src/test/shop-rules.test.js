import {describe,it,expect} from 'vitest';
import {products} from '../data/shop';
import {priceForSize,paymentService} from '../services/shop';
describe('DREAMS requirements',()=>{
 it('prices Puramaté Cocoa Powder 100 g at ₹75',()=>{const p=products.find(p=>p.id==='cocoa-powder');expect(p.size).toBe('100 g');expect(priceForSize(p,'100 g')).toBe(75)});
 it('keeps submitted UPI payments awaiting verification',()=>{expect(paymentService.submitUTR('DEMO123456789').status).toBe('VERIFYING')});
 it('does not mark newly created UPI payments paid',()=>{expect(paymentService.createPayment('UPI').status).toBe('PENDING')});
});
