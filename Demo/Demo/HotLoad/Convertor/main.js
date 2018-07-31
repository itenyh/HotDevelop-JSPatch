require('NSMutableArray,NSNumber,NSIndexPath,UICollectionViewLayoutAttributes');
defineClass('PinterestLayout', {
    prepareLayout: function() {
        var columnWidth = self.contentWidth() / self.numberOfColumns();
        var xOffset = NSMutableArray.array();
        var column = 0;
        var yOffset = NSMutableArray.array();
        for (var i = 0; i < self.numberOfColumns(); i++) {
            xOffset.addObject(NSNumber.numberWithFloat(i * columnWidth));
            yOffset.addObject(NSNumber.numberWithFloat(0));
        }

        for (var i = 0; i < self.collectionView().numberOfItemsInSection(0); i++) {
            var indexPath = NSIndexPath.indexPathForItem_inSection(i, 0);

            var photoHeight = self.delegate().collectionView_heightForPhotoAtIndexPath(self.collectionView(), indexPath);
            var height = self.cellPadding() * 2 + photoHeight;
            var frame = CGRectMake(xOffset.jp_element(column).floatValue(), yOffset.jp_element(column).floatValue(), columnWidth, height);
            var insetFrame = CGRectMake(self.cellPadding(), self.cellPadding(), frame.width() - 2 * self.cellPadding(), frame.height() - 2 * self.cellPadding());

            var attributes = UICollectionViewLayoutAttributes.layoutAttributesForCellWithIndexPath(indexPath);
            attributes.setFrame(insetFrame);
            self.cache().addObject(attributes);


            self.setContentHeight(self.findMax_n2(self.contentHeight(), frame.y()));
            yOffset.setJp_element(column, NSNumber.numberWithFloat(yOffset.jp_element(column).floatValue() + height));
            column = column < (self.numberOfColumns() - 1) ? (column + 1) : 0;
        }

    },
    layoutAttributesForElementsInRect: function(rect) {
        var visibleLayoutAttributes = NSMutableArray.array();
        for (UICollectionViewLayoutAttributes * attribute in self.cache()) {

        }
    },
    cellPadding: function() {
        return 6;
    },
    contentHeight: function() {
        return 0;
    },
    numberOfColumns: function() {
        return 2;
    },
    contentWidth: function() {
        if (self.collectionView()) {
            var insets = self.collectionView().contentInset();
            return self.collectionView().bounds().width() - (insets.left() + insets.right());
        }
        return 0;
    },
    collectionViewContentSize: function() {
        return CGSizeMake(self.contentWidth(), self.contentHeight());
    },
});