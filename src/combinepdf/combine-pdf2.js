/*
 * Copyright 2019 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying
 * it. If you have received this file from a source other than Adobe,
 * then your use, modification, or distribution of it requires the prior
 * written permission of Adobe.
 */

const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

/**
 * This sample illustrates how to combine multiple PDF files into a single PDF file.
 * <p>
 * Note that the SDK supports combining upto 20 files in one operation.
 * <p>
 * Refer to README.md for instructions on how to run the samples.
 */
try {
    // Initial setup, create credentials instance.
    const credentials = PDFServicesSdk.Credentials
        .serviceAccountCredentialsBuilder()
        .fromFile("pdfservices-api-credentials.json")
        .build();

    // Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
        combineFilesOperation = PDFServicesSdk.CombineFiles.Operation.createNew();

    // Set operation input from a source file.
    const combineSource1 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile1.pdf'),
    combineSource2 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile2.pdf'),
    combineSource3 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile3.pdf'),
    combineSource4 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile4.pdf'),
    combineSource5 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile5.pdf'),
    combineSource6 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile6.pdf'),
    combineSource7 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile7.pdf'),
    combineSource8 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile8.pdf'),
    combineSource9 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile9.pdf'),
    combineSource10 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile10.pdf'),
    combineSource11 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile11.pdf'),
    combineSource12 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile12.pdf'),
    combineSource13 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile13.pdf'),
    combineSource14 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile14.pdf'),
    combineSource15 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile15.pdf'),
    combineSource16 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile16.pdf'),
    combineSource17 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile17.pdf'),
    combineSource18 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile19.pdf'),
    combineSource19 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile20.pdf'),
    combineSource20 =PDFServicesSdk.FileRef.createFromLocalFile('resources/MultipleFilesOperationTesting/testfile21.pdf');
    
    combineFilesOperation.addInput(combineSource1);
    combineFilesOperation.addInput(combineSource2);
    combineFilesOperation.addInput(combineSource3);
    combineFilesOperation.addInput(combineSource4);
    combineFilesOperation.addInput(combineSource5);
    combineFilesOperation.addInput(combineSource6);
    combineFilesOperation.addInput(combineSource7);
    combineFilesOperation.addInput(combineSource8);
    combineFilesOperation.addInput(combineSource9);
    combineFilesOperation.addInput(combineSource10);
    combineFilesOperation.addInput(combineSource11);
    combineFilesOperation.addInput(combineSource12);
    combineFilesOperation.addInput(combineSource13);
    combineFilesOperation.addInput(combineSource14);
    combineFilesOperation.addInput(combineSource15);
    combineFilesOperation.addInput(combineSource16);
    combineFilesOperation.addInput(combineSource17);
    combineFilesOperation.addInput(combineSource18);
    combineFilesOperation.addInput(combineSource19);
    combineFilesOperation.addInput(combineSource20);


    // Execute the operation and Save the result to the specified location.
    combineFilesOperation.execute(executionContext)
        .then(result => result.saveAsFile('output/combineFilesOutput.pdf'))
        .catch(err => {
            if (err instanceof PDFServicesSdk.Error.ServiceApiError
                || err instanceof PDFServicesSdk.Error.ServiceUsageError) {
                console.log('Exception encountered while executing operation', err);
            } else {
                console.log('Exception encountered while executing operation', err);
            }
        });
} catch (err) {
    console.log('Exception encountered while executing operation', err);
}
