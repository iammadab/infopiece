## Secretpiece
*Based on [shamir secret sharing](https://cs.jhu.edu/~sdoshi/crypto/papers/shamirturing.pdf)*

A secret is divided up into pieces, these pieces can be distributed however, to reconstruct the original secret, a minimum number of pieces is required.

> Eleven scientists are working on a secret project. They wish to lock up the documents in a cabinet so that the cabinet can be opened if and only if six or more of the scientists are present.

The cabinet can be opened with the password - **TopSecretPassword123**


#### Break Secret
First we split the password into eleven pieces, requiring at least 6 pieces to reconstruct

#### 
```javascript
  const secretpiece = require("secretpiece")
  
  let pieces = secretpiece.breakSecret({
    secret: "TopSecretPassword123",
    pieces: 11,
    threshold: 6
  })
  
  console.log(pieces)
  
  /*
    [
      '1251547472633423556660133708476113482726157016290403493076594',
      '21982405760960338316788782950971156135264948797693382655481309',
      '311020557415693998973377069569748867233275819978224872983554944',
      '440506985194243404701190325144991235973800033486187965274211639',
      '5114049072222468191909337164024764537341205630025445329501282526',
      '6268789891044350425894724455238905270858017268445577538642809329',
      '7558477492671666392495512294412906099335746066112041392508337964',
      '81056534195633658389744568975681801787625719439276328241566212139',
      '91859125875026706519522925963604055141369910943446122310770866954',
      '103088231251564000479213232865075442945751770113755459023390122501',
      '114894711180625211353353212401242941904247052305334883324832477464'
    ]
  */
```


#### Reconstruct Secret
Now, when at least six scientist come together, they can reconstruct the secret

```javascript
  const secretpiece = require("secretpiece")
  
  
```
