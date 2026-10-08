import chocolate from '@/assets/chocolate.jpg';
import ingredients from '@/assets/ingredients.jpg';
import decoration from '@/assets/decoration.jpg';
import candles from '@/assets/candles.jpg';
import packaging from '@/assets/packaging.jpg';
import tools from '@/assets/tools.jpg';
import cocoa from '@/assets/cocoa.jpg';
export const categories = [
 {slug:'chocolate-cocoa',name:'Chocolate & Cocoa',image:chocolate},
 {slug:'baking-ingredients',name:'Baking Ingredients',image:ingredients},
 {slug:'cake-decoration',name:'Cake Decoration',image:decoration},
 {slug:'candles',name:'Candles',image:candles},
 {slug:'packaging',name:'Packaging',image:packaging},
 {slug:'bakery-supplies',name:'Bakery Supplies',image:tools},
];
export const products = [
 {id:'white-choco-chips',name:'Chocotown White Choco Chips',size:'500 g',price:449,original:499,image:chocolate,category:'chocolate-cocoa',type:'Chocolate Chips',badge:'BEST SELLER'},
 {id:'cocoa-powder',name:'Puramaté Cocoa Powder',size:'100 g',price:75,original:90,image:cocoa,category:'chocolate-cocoa',type:'Cocoa',badge:'BAKER’S FAVORITE'},
 {id:'pink-cake-box',name:'Premium Pink Cake Box',size:'12 × 12 inch',price:50,original:65,image:packaging,category:'packaging',type:'Cake Boxes'},
 {id:'dark-choco-chips',name:'Chocotown Dark Choco Chips',size:'500 g',price:399,original:449,image:chocolate,category:'chocolate-cocoa',type:'Chocolate Chips'},
 {id:'dark-compound',name:'Puramaté Dark Compound Chips',size:'100 g',price:55,image:chocolate,category:'chocolate-cocoa',type:'Compound'},
 {id:'milk-compound',name:'Puramaté Milk Compound Chips',size:'100 g',price:55,image:chocolate,category:'chocolate-cocoa',type:'Compound'},
 {id:'baking-powder',name:'Double Acting Baking Powder',size:'100 g',price:65,image:ingredients,category:'baking-ingredients',type:'Ingredients'},
 {id:'butterfly-toppers',name:'Butterfly Cake Toppers',size:'Set of 12',price:120,image:decoration,category:'cake-decoration',type:'Decorations'},
 {id:'birthday-candles',name:'Pastel Birthday Candles',size:'Pack of 6',price:45,image:candles,category:'candles',type:'Candles'},
 {id:'piping-set',name:'Baking & Piping Essentials',size:'Set of 8',price:249,image:tools,category:'bakery-supplies',type:'Tools'},
 {id:'white-cake-box',name:'White Cake Box',size:'8 × 8 inch',price:35,image:packaging,category:'packaging',type:'Cake Boxes'},
 {id:'baking-soda',name:'Pure Baking Soda',size:'100 g',price:40,image:ingredients,category:'baking-ingredients',type:'Ingredients'},
];
export const demoOrders=[{id:'DRM12456',date:'12 Aug 2026',status:'Delivered',items:[{id:'white-choco-chips',qty:1,size:'500 g',price:449},{id:'cocoa-powder',qty:1,size:'100 g',price:75}],total:564},{id:'DRM12412',date:'5 Aug 2026',status:'Shipped',items:[{id:'dark-choco-chips',qty:1,size:'500 g',price:399}],total:439},{id:'DRM12398',date:'28 Jul 2026',status:'Processing',items:[{id:'pink-cake-box',qty:2,size:'12 × 12 inch',price:50},{id:'birthday-candles',qty:1,size:'Pack of 6',price:45}],total:185}];
export const money = value => `₹${value.toLocaleString('en-IN')}`;
