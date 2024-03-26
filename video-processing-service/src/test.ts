async function test(name: string) {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            console.log(`hey ${name}`);
        }, 0)
        setTimeout(() => {
            console.log('second ')

        }, 5000)
        resolve()

    })
}

async function main() {
    try {
        await test("james")
    } catch {
        console.log('err')
    }
    console.log('first?')

}
main()

