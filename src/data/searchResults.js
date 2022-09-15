const parts = [
    {
        itemType: "stock",
        partId: "171",
        description: "Latch Complete",
        price: "81.29",
        details: {
            DisplayMfg: "Kason",
            "Door Type": "Reach-In",
            Finish: "Chrome",
            "Latch Screws": "(4) #10 Oval Head",
            Mounting: "Edgemount",
            Series: "Kason 171",
            "Strike Screws": "(2) #10 Oval Head",
            Weight: "2.85",
            "With Key": "without Key"
        }
    },
    {
        itemType: "stock",
        partId: "171-03",
        description: "Strike Only",
        price: "49.50",
        details: {
            DisplayMfg: "Kason",
            "Door Type": "Reach-In",
            Finish: "Chrome",
            Series: "Kason 171",
            "Strike Screws": "(2) #10 Oval Head",
        }
    },
    {
        itemType: "stock",
        partId: "171-C",
        description: "Mag Latch Complete w/Key",
        price: "107.92",
        details: {
            DisplayMfg: "Kason",
            "Door Type": "Reach-In",
            Finish: "Chrome",
            "Latch Screws": "(4) #10 Oval Head",
            Mounting: "Edgemount",
            Series: "Kason 171",
            "Strike Screws": "(2) #10 Oval Head",
            Weight: "3.00",
            "With Key": "with Key"
        }
    },
    {
        itemType: "stock",
        partId: "171-CM",
        description: "Key Cylinder Only",
        price: "32.31",
        details: {
            DisplayMfg: "Kason",
            Series: "Kason 171",
            Weight: "0.15",
        }
    },
]

export default function searchResults(partId) {
    return partId
    ? parts.find(part => partId === part.partId)
    : parts
}
