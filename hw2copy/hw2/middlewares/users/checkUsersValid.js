module.exports = (req,res) => {
    const {name , password} = req.body;

    if (!name || !password){
        alert('Wrong name or password');
    }

}
