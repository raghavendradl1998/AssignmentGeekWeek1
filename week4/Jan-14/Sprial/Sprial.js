let R = 5;
let C = 5;

function counterClockspiralPrint(m, n, arr)
{
    let i, k = 0, l = 0;
 

    let cnt = 0;
 

    let total = m * n;
 
    while (k < m && l < n)
    {
        if (cnt == total)
            break;
 

        for (i = k; i < m; ++i)
        {
            document.write(arr[i][l] + " ");
            cnt++;
        }
        l++;
 
        if (cnt == total)
            break;
 

        for (i = l; i < n; ++i)
        {
            document.write(arr[m - 1][i] + " ");
            cnt++;
        }
        m--;
 
        if (cnt == total)
            break;
 

        if (k < m)
        {
            for (i = m - 1; i >= k; --i)
            {
                document.write(arr[i][n - 1] + " ");
                cnt++;
            }
            n--;
        }
 
        if (cnt == total)
            break;
 

        if (l < n)
        {
            for (i = n - 1; i >= l; --i)
            {
                document.write(arr[k][i] + " ");
                cnt++;
            }
            k++;
        }
    }
}

    let arr = [
                [1,16,15,14,13],
                [2,17,24,23,12],
                [3,18,25,22,11],
                [4,19,20,21,10],
                [5,6,7,8,9]
            ];
    counterClockspiralPrint(R, C, arr);