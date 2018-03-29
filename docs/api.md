<a name="module_webbci"></a>

## webbci

* [webbci](#module_webbci)
    * [.oscStream](#module_webbci.oscStream)
    * [.wait](#module_webbci.wait)
    * [.features](#module_webbci.features) : <code>object</code>
        * [.module.exports.logvar(window)](#module_webbci.features.module.exports.logvar)
        * [.module.exports.rms(window)](#module_webbci.features.module.exports.rms)
    * [.cspLearn(class1, class2)](#module_webbci.cspLearn) ⇒
    * [.cspProject(cspParams, data, [dimensions])](#module_webbci.cspProject) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
    * [.generateSignal(amplitudes, frequencies, sampleRate, duration)](#module_webbci.generateSignal) ⇒ <code>Array.&lt;number&gt;</code>
    * [.ldaLearn(class1, class2)](#module_webbci.ldaLearn) ⇒
    * [.ldaProject(ldaParams, point)](#module_webbci.ldaProject) ⇒ <code>number</code>
    * [.psdBandPower(psd, length, sampleRate, band)](#module_webbci.psdBandPower) ⇒ <code>number</code>
    * [.signalBandPower(signal, length, sampleRate, band)](#module_webbci.signalBandPower) ⇒ <code>number</code>
    * [.loadCSV(filePath)](#module_webbci.loadCSV) ⇒ <code>Promise</code>
    * [.round(array, places)](#module_webbci.round) ⇒ <code>Array.&lt;number&gt;</code>
    * [.saveCSV(array, filename)](#module_webbci.saveCSV) ⇒ <code>Promise</code>
    * [.subscript(array, ...params)](#module_webbci.subscript) ⇒ <code>Array</code>
    * [.toFixed(array, places)](#module_webbci.toFixed)
    * [.table(array)](#module_webbci.table)
    * [.windowApply(array, func, length, step, tail)](#module_webbci.windowApply) ⇒ <code>Array</code>
    * [.oscCollect(address, port, header, samples)](#module_webbci.oscCollect)
    * [.oscHeaderScan(address, port, duration)](#module_webbci.oscHeaderScan)

<a name="module_webbci.oscStream"></a>

### webbci.oscStream
**Kind**: static class of [<code>webbci</code>](#module_webbci)  
<a name="module_webbci.wait"></a>

### webbci.wait
**Kind**: static property of [<code>webbci</code>](#module_webbci)  

| Param | Type | Description |
| --- | --- | --- |
| ms | <code>number</code> | Number of milliseconds to wait |

<a name="module_webbci.features"></a>

### webbci.features : <code>object</code>
Feature extraction methods

**Kind**: static namespace of [<code>webbci</code>](#module_webbci)  

* [.features](#module_webbci.features) : <code>object</code>
    * [.module.exports.logvar(window)](#module_webbci.features.module.exports.logvar)
    * [.module.exports.rms(window)](#module_webbci.features.module.exports.rms)

<a name="module_webbci.features.module.exports.logvar"></a>

#### features.module.exports.logvar(window)
Computes the log of the variance of each channel in a 2d array of samples, where channels are columns

**Kind**: static method of [<code>features</code>](#module_webbci.features)  

| Param | Type |
| --- | --- |
| window | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | 

<a name="module_webbci.features.module.exports.rms"></a>

#### features.module.exports.rms(window)
Computes the root mean square of each channel in a 2d array of samples, where channels are columns

**Kind**: static method of [<code>features</code>](#module_webbci.features)  

| Param | Type |
| --- | --- |
| window | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | 

<a name="module_webbci.cspLearn"></a>

### webbci.cspLearn(class1, class2) ⇒
Learn common spatial pattern for two datasets

**Kind**: static method of [<code>webbci</code>](#module_webbci)  
**Returns**: Learned CSP parameters  

| Param | Type | Description |
| --- | --- | --- |
| class1 | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | Data samples for class 1. Rows should be samples, columns should be signals. |
| class2 | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | Data samples for class 2. Rows should be samples, columns should be signals. |

<a name="module_webbci.cspProject"></a>

### webbci.cspProject(cspParams, data, [dimensions]) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
Projects data and reduces to given number of dimensions

**Kind**: static method of [<code>webbci</code>](#module_webbci)  
**Returns**: <code>Array.&lt;Array.&lt;number&gt;&gt;</code> - Projected data. Rows are samples, columns are dimensions sorted by descending importance.  

| Param | Type | Description |
| --- | --- | --- |
| cspParams | <code>object</code> | CSP parameters computed using the cspLearn function |
| data | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | Data points to be projected. Rows should be samples, columns should be signals. |
| [dimensions] | <code>number</code> | Number of dimensions to be returned. Can range from 1 to number of signals. Defaults to number of signals. |

<a name="module_webbci.generateSignal"></a>

### webbci.generateSignal(amplitudes, frequencies, sampleRate, duration) ⇒ <code>Array.&lt;number&gt;</code>
Generate a signal with the given frequencies and their amplitudes.

**Kind**: static method of [<code>webbci</code>](#module_webbci)  
**Returns**: <code>Array.&lt;number&gt;</code> - The generated signal.  

| Param | Type | Description |
| --- | --- | --- |
| amplitudes | <code>Array.&lt;number&gt;</code> | The amplitudes of each frequency. |
| frequencies | <code>Array.&lt;number&gt;</code> | The frequencies. |
| sampleRate | <code>number</code> | Sample rate of the signal in Hz. |
| duration | <code>number</code> | Duration of the signal in seconds. |

<a name="module_webbci.ldaLearn"></a>

### webbci.ldaLearn(class1, class2) ⇒
Perform linear discriminant analysis between two datasets

**Kind**: static method of [<code>webbci</code>](#module_webbci)  
**Returns**: Computed LDA parameters  

| Param | Type | Description |
| --- | --- | --- |
| class1 | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | Data set for class 1, rows are samples, columns are variables |
| class2 | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | Data set for class 2, rows are samples, columns are variables |

<a name="module_webbci.ldaProject"></a>

### webbci.ldaProject(ldaParams, point) ⇒ <code>number</code>
Predict the class of an unknown data point.

**Kind**: static method of [<code>webbci</code>](#module_webbci)  
**Returns**: <code>number</code> - value less than 0 if predicted to be in class 1, 0 if exactly inbetween, greater than 0 if class 2  

| Param | Type | Description |
| --- | --- | --- |
| ldaParams | <code>object</code> | The parameters for the LDA, computed with the function ldaLearn |
| point | <code>Array.&lt;number&gt;</code> | The data point to be classified. |

<a name="module_webbci.psdBandPower"></a>

### webbci.psdBandPower(psd, length, sampleRate, band) ⇒ <code>number</code>
Compute the average power across a given frequency band given the PSD.

**Kind**: static method of [<code>webbci</code>](#module_webbci)  
**Returns**: <code>number</code> - The average power in the frequency band.  

| Param | Type | Description |
| --- | --- | --- |
| psd | <code>Array.&lt;number&gt;</code> | Power spectral density of the signal. |
| length | <code>number</code> | Size of the fourier transform used to compute the PSD. |
| sampleRate | <code>number</code> | The sample rate of the signal. |
| band | <code>Array.&lt;number&gt;</code> \| <code>string</code> | The frequency band provided as an array [frequencyStart, frequencyStop] or a string <code>delta</code> (1-3 Hz), <code>theta</code> (4-7 Hz), <code>alpha</code> (8-12 Hz), <code>beta</code> (13-30 Hz), or <code>gamma</code> (31-50 Hz). While string representations allow for easier prototyping, the use of a specific band passed as an array is recommended, as band string representations may change in future updates. |

<a name="module_webbci.signalBandPower"></a>

### webbci.signalBandPower(signal, length, sampleRate, band) ⇒ <code>number</code>
Compute the average power across a given frequency band in a signal.

**Kind**: static method of [<code>webbci</code>](#module_webbci)  
**Returns**: <code>number</code> - The average power in the frequency band.  

| Param | Type | Description |
| --- | --- | --- |
| signal | <code>Array.&lt;number&gt;</code> | The signal. |
| length | <code>number</code> | Size of the fourier transform used to compute the PSD. |
| sampleRate | <code>number</code> | The sample rate of the signal. |
| band | <code>Array.&lt;number&gt;</code> \| <code>string</code> | The frequency band provided as an array [frequencyStart, frequencyStop] or a string <code>delta</code> (1-3 Hz), <code>theta</code> (4-7 Hz), <code>alpha</code> (8-12 Hz), <code>beta</code> (13-30 Hz), or <code>gamma</code> (31-50 Hz). While string representations allow for easier prototyping, the use of a specific band passed as an array is recommended, as band string representations may change in future updates. |

<a name="module_webbci.loadCSV"></a>

### webbci.loadCSV(filePath) ⇒ <code>Promise</code>
Loads a CSV file into an array

**Kind**: static method of [<code>webbci</code>](#module_webbci)  
**Returns**: <code>Promise</code> - A promise object representing the CSV data array  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | The path to the CSV file |

<a name="module_webbci.round"></a>

### webbci.round(array, places) ⇒ <code>Array.&lt;number&gt;</code>
Rounds every value in an array to a set number of decimal places

**Kind**: static method of [<code>webbci</code>](#module_webbci)  
**Returns**: <code>Array.&lt;number&gt;</code> - The rounded array  

| Param | Type |
| --- | --- |
| array | <code>Array.&lt;number&gt;</code> | 
| places | <code>number</code> | 

<a name="module_webbci.saveCSV"></a>

### webbci.saveCSV(array, filename) ⇒ <code>Promise</code>
Saves an array to a CSV file

**Kind**: static method of [<code>webbci</code>](#module_webbci)  
**Returns**: <code>Promise</code> - A promise object that resolves when the file has been saved. Does not currently reject on write error.  

| Param | Type |
| --- | --- |
| array | <code>Array</code> | 
| filename | <code>string</code> | 

<a name="module_webbci.subscript"></a>

### webbci.subscript(array, ...params) ⇒ <code>Array</code>
Subscript an array with MATLAB-like syntax

**Kind**: static method of [<code>webbci</code>](#module_webbci)  
**Returns**: <code>Array</code> - The subscripted array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to be subscripted |
| ...params | <code>string</code> | Colon notation for which elements to include in each dimension |

<a name="module_webbci.toFixed"></a>

### webbci.toFixed(array, places)
Returns an array of numbers as strings rounded to the proper number of decimal places and padded with zeros as needed.

**Kind**: static method of [<code>webbci</code>](#module_webbci)  

| Param | Type |
| --- | --- |
| array | <code>Array</code> | 
| places | <code>number</code> | 

<a name="module_webbci.table"></a>

### webbci.table(array)
Returns an ASCII table representation of an array

**Kind**: static method of [<code>webbci</code>](#module_webbci)  

| Param | Type |
| --- | --- |
| array | <code>Array</code> | 

<a name="module_webbci.windowApply"></a>

### webbci.windowApply(array, func, length, step, tail) ⇒ <code>Array</code>
Similar to JavaScript's map, but it applies a function to sub arrays instead of each element.

**Kind**: static method of [<code>webbci</code>](#module_webbci)  
**Returns**: <code>Array</code> - An array containing the function result for each window  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array of elements which will be windowed |
| func | <code>function</code> |  | The function to call on each window, the returned result is stored in a returned array |
| length | <code>number</code> |  | The number of elements to include in each window |
| step | <code>number</code> |  | The start of the window is incremented by this amount every iteration |
| tail | <code>boolean</code> | <code>false</code> | If false, windows which begin near the end of the array which cannot reach length 'length' will be ignored |

<a name="module_webbci.oscCollect"></a>

### webbci.oscCollect(address, port, header, samples)
Collect a set number of samples over OSC

**Kind**: static method of [<code>webbci</code>](#module_webbci)  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | OSC address |
| port | <code>number</code> | OSC port |
| header | <code>string</code> | OSC header, can be found by scanning with oscHeaderScan if unknown |
| samples | <code>number</code> | The number of samples to collect |

<a name="module_webbci.oscHeaderScan"></a>

### webbci.oscHeaderScan(address, port, duration)
Scan for OSC headers on a port and address

**Kind**: static method of [<code>webbci</code>](#module_webbci)  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>any</code> | OSC address |
| port | <code>any</code> | OSC port |
| duration | <code>any</code> | Duration of scan in milliseconds |
