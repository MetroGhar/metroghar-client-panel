export default function KLC(value) {
    if (value !== undefined && value !== null) {
        var val = value
        if (val >= 10000000) {
            val = (val / 10000000).toFixed(0) + ' Cr'
        } else if (val >= 100000) {
            val = (val / 100000).toFixed(0) + ' L'
        } else if (val >= 1000) {
            val = (val / 1000).toFixed(0) + ' K'
        } else {
            val = value
        }

        return val
    }
}